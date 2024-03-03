use cosmwasm_std::{
    entry_point, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdError, StdResult, SubMsgResult, Reply
};
use msg::{ExecuteMsg, InstantiateMsg, QueryMsg};
use thiserror::Error;
mod contract;
mod msg;
mod state;
use crate::state::NUM;

#[entry_point]
pub fn query(deps: Deps, env: Env, msg: msg::QueryMsg)
	     -> StdResult<Binary>
{
    contract::query(deps, env, msg)
}

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> StdResult<Response> {
    contract::instantiate(deps, env, info, msg)
}

#[entry_point]
pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> StdResult<Response> {
    contract::execute(deps, env, info, msg)
}

#[derive(Error, Debug)]
pub enum ContractError {
    #[error("Standard error: {0}")]
    Std(#[from] StdError),

    #[error("Unknown reply ID received")]
    UnknownReplyId,
}

#[entry_point]
pub fn reply(deps: DepsMut, _env: Env, msg: Reply) -> Result<Response, ContractError> {
    match msg.id {
        1 => {
            match msg.result {
                SubMsgResult::Ok(_) => {
		    NUM.update(deps.storage, move |num2| -> StdResult<_> {
			Ok(1 + num2)
		    })?;
		    Ok(Response::new().add_attribute("action", "handle_reply").add_attribute("result", "success"))
                },
                SubMsgResult::Err(err) => {
		    Ok(Response::new().add_attribute("action", "handle_reply").add_attribute("error", err))
                },
            }
        },
        _ => Err(ContractError::UnknownReplyId {}),
    }
}
