use cosmwasm_std::{to_json_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};
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
    }
}

mod exec {
    use super::*;
    
    pub fn add(deps: DepsMut, _info: MessageInfo, num: u8) -> StdResult<Response> {
        NUM.update(deps.storage, move |num2| -> StdResult<_> {
            Ok(num + num2)
        })?;
        Ok(Response::new().add_attribute("action", "perform_action"))
    }
}
