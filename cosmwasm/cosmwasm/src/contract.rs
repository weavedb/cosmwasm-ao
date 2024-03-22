use cosmwasm_std::{
    to_json_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult,WasmMsg, CosmosMsg, SubMsg, ReplyOn, StdError
};
use serde::{Serialize, Deserialize};
use crate::state::NUM;
use crate::msg::{ NumResp, InstantiateMsg, QueryMsg, ExecuteMsg};

pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    use QueryMsg::*;
    match msg {
	Num {} => to_json_binary(&query::num(deps)?),
    }
}

mod query {
    use super::*;
    pub fn num(deps: Deps) -> StdResult<NumResp> {
        let n = NUM.load(deps.storage)?;
        let resp = NumResp { num: n };
        Ok(resp)
    }
    
}
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    msg: InstantiateMsg,
) -> StdResult<Response> {
    NUM.save(deps.storage, &msg.num)?;
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
	Add { num } => exec::add(deps, info, num),
	Add2 { num, addr } => exec::add2(deps, info, num, addr),
	Add3 { num, addr } => exec::add3(deps, info, num, addr),
	Add4 { num, addr } => exec::add4(deps, info, num, addr),
	Add5 { num } => exec::add5(deps, info, num),
    }
}

#[derive(Serialize, Deserialize)]
struct SubErr {
    num: u8
}

mod exec {
    use super::*;
    use ExecuteMsg::*;
    
    pub fn add(deps: DepsMut, _info: MessageInfo, num: u8) -> StdResult<Response> {
        NUM.update(deps.storage, move |num2| -> StdResult<_> {
            Ok(num + num2)
        })?;
        Ok(Response::new().add_attribute("action", "perform_action"))
    }
    
    pub fn add2(_deps: DepsMut, _info: MessageInfo, num: u8, addr: String) -> StdResult<Response> {
	let msg = Add {
            num: num
	};
	let binary_msg: StdResult<Binary> = to_json_binary(&msg);
	let cosmos_msg = CosmosMsg::Wasm(WasmMsg::Execute {
            contract_addr: addr,
            msg: binary_msg?,
            funds: vec![],
	});
        Ok(Response::new().add_message(cosmos_msg))
    }
    
    pub fn add3(_deps: DepsMut, _info: MessageInfo, num: u8, addr: String) -> StdResult<Response> {
	let msg = Add {
            num: num
	};
	let binary_msg: StdResult<Binary> = to_json_binary(&msg);
	let cosmos_msg = CosmosMsg::Wasm(WasmMsg::Execute {
            contract_addr: addr,
            msg: binary_msg?,
            funds: vec![],
	});
	let sub_msg = SubMsg {
	    id: 1, 
	    msg: cosmos_msg,
	    reply_on: ReplyOn::Success,
	    gas_limit: None,
	};
        Ok(Response::new().add_submessage(sub_msg))
    }

    pub fn add4(_deps: DepsMut, _info: MessageInfo, num: u8, addr: String) -> StdResult<Response> {
	let msg = Add5 {
            num: num
	};
	let binary_msg: StdResult<Binary> = to_json_binary(&msg);
	let cosmos_msg = CosmosMsg::Wasm(WasmMsg::Execute {
            contract_addr: addr,
            msg: binary_msg?,
            funds: vec![],
	});
	let sub_msg = SubMsg {
	    id: 2, 
	    msg: cosmos_msg,
	    reply_on: ReplyOn::Always,
	    gas_limit: None,
	};
        Ok(Response::new().add_submessage(sub_msg))
    }

    pub fn add5(deps: DepsMut, _info: MessageInfo, num: u8) -> StdResult<Response> {
	if num < 2 {
	    return Err(StdError::generic_err("Testing submessages"));
	}
	let sub_err = SubErr {
	    num: num
	};
	NUM.update(deps.storage, move |num2| -> StdResult<_> {
            Ok(num + num2)
        })?;
	let binary_data = to_json_binary(&sub_err)?;
        Ok(Response::new().add_attribute("action", "perform_action").set_data(binary_data))
    }
    
}
