use cosmwasm_std::{
    Order, Addr, to_json_binary, Binary, Deps, DepsMut, Env, Event, MessageInfo, Response, StdResult,WasmMsg, CosmosMsg, SubMsg, ReplyOn, StdError
};
use serde::{ Serialize, Deserialize };
use crate::state::{ BALANCES, NAME, TICKER, LOGO, DENOMINATION, OWNER };
use crate::msg::{ BalanceResp, BalancesResp, InfoResp, InstantiateMsg, QueryMsg, ExecuteMsg };

pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    use QueryMsg::*;
    match msg {
	Info {} => to_json_binary(&query::info(deps)?),
	Balance { Target } => to_json_binary(&query::balance(deps, Target)?),
	Balances {} => to_json_binary(&query::balances(deps)?),
    }
}

mod query {
    use super::*;
    pub fn info(deps: Deps) -> StdResult<InfoResp> {
        let name = NAME.load(deps.storage)?;
	let ticker = TICKER.load(deps.storage)?;
	let denomination = DENOMINATION.load(deps.storage)?.to_string();
        let resp = InfoResp { Name: name, Ticker: ticker, Denomination: denomination };
        Ok(resp)
    }
    pub fn balance(deps: Deps, addr: Addr) -> StdResult<BalanceResp> {
	let balance = BALANCES.may_load(deps.storage, addr).
	    unwrap_or_default().
	    map(|value| value.to_string()).
	    unwrap_or_else(|| "0".to_string());
	let ticker = TICKER.load(deps.storage)?;
        let resp = BalanceResp { Balance: balance, Ticker: ticker };
        Ok(resp)
    }

    pub fn balances(deps: Deps) -> StdResult<BalancesResp> {
	let balances: Vec<(Addr, u8)> = BALANCES
        .range(deps.storage, None, None, Order::Ascending)
        .map(|item| item.map(|(key, value)| (key, value)))
        .collect::<StdResult<Vec<(Addr, u8)>>>()?;
        let resp = BalancesResp { Balances: balances };
        Ok(resp)
    }
    
}

pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> StdResult<Response> {
    let num_value: u8 = 0;
    let denom: u8 = msg.Denomination.parse().map_err(|_| StdError::generic_err("Failed to parse num"))?;
    BALANCES.save(deps.storage, info.sender.clone(), &num_value)?;
    OWNER.save(deps.storage, &info.sender)?;
    NAME.save(deps.storage, &msg.Name)?;
    TICKER.save(deps.storage, &msg.Ticker)?;
    LOGO.save(deps.storage, &msg.Logo)?;
    DENOMINATION.save(deps.storage, &denom)?;
    Ok(Response::new())
}

pub fn execute(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> StdResult<Response> {
    use ExecuteMsg::*;
    match msg {
	Mint { Quantity } => exec::mint(deps, info, Quantity),
	Transfer { Recipient, Quantity } => exec::transfer(deps, info, Recipient, Quantity),
    }
}

mod exec {
    use super::*;
    use ExecuteMsg::*;
    
    pub fn mint(deps: DepsMut, info: MessageInfo, Quantity: String) -> StdResult<Response> {
	let owner = OWNER.load(deps.storage)?;
	if info.sender != owner {
            return Err(StdError::generic_err("unauthorized"));
	}
	let quantity: u8 = Quantity.parse().map_err(|_| StdError::generic_err("Failed to parse num"))?;
        BALANCES.update(deps.storage, info.sender, |balance| -> StdResult<u8> {
	    Ok(quantity + balance.unwrap_or_default())
	})?;
        Ok(Response::new())
    }

    pub fn transfer(deps: DepsMut, info: MessageInfo, Recipient: Addr, Quantity: String) -> StdResult<Response> {
	let quantity: u8 = Quantity.parse().map_err(|_| StdError::generic_err("Failed to parse num"))?;
	let balance = BALANCES.may_load(deps.storage, info.sender.clone()).
	    unwrap_or_default().
	    unwrap_or(0);
	if balance < quantity {
	    return Err(StdError::generic_err("not enough balance"));
	}
        BALANCES.update(deps.storage, info.sender, |balance| -> StdResult<u8> {
	    Ok(balance.unwrap_or_default() - quantity)
	})?;
	BALANCES.update(deps.storage, Recipient, |balance| -> StdResult<u8> {
	    Ok(balance.unwrap_or_default() + quantity)
	})?;
        Ok(Response::new())
    }
    
}
