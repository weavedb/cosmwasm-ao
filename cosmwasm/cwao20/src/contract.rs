use cosmwasm_std::{
    Addr, to_json_binary, Binary, Deps, DepsMut, Env, Event, MessageInfo, Response, StdResult,WasmMsg, CosmosMsg, SubMsg, ReplyOn, StdError
};
use serde::{Serialize, Deserialize};
use crate::state::{BALANCES, NAME, TICKER, LOGO, DENOMINATION, OWNER};
use crate::msg::{ BalanceResp, InfoResp, InstantiateMsg, QueryMsg, ExecuteMsg};

pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    use QueryMsg::*;
    match msg {
	Info {} => to_json_binary(&query::info(deps)?),
	Balance { Target } => to_json_binary(&query::balance(deps, Target)?),
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
	Mint { num } => exec::mint(deps, info, num),
    }
}

mod exec {
    use super::*;
    use ExecuteMsg::*;
    pub fn mint(deps: DepsMut, info: MessageInfo, num: String) -> StdResult<Response> {
	let num_value: u8 = num.parse().map_err(|_| StdError::generic_err("Failed to parse num"))?;
        BALANCES.update(deps.storage, info.sender, |num2| -> StdResult<u8> {
	    Ok(num_value + num2.unwrap_or_default())
	})?;
        Ok(Response::new())
    }
    
}
