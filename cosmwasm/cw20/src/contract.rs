// src/contract.rs

use cosmwasm_std::{entry_point, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};
use cw20_base::contract::{execute as cw20_execute, instantiate as cw20_instantiate, query as cw20_query};
use cw20_base::msg::{ExecuteMsg as Cw20ExecuteMsg, InstantiateMsg as Cw20InstantiateMsg, QueryMsg as Cw20QueryMsg};

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: Cw20InstantiateMsg,
) -> StdResult<Response> {
    // Call the cw20-base instantiate, potentially adding custom logic before or after
    cw20_instantiate(deps, env, info, msg)
}

#[entry_point]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: Cw20ExecuteMsg,
) -> StdResult<Response> {
    // Delegate to cw20-base execute, or handle custom messages
    cw20_execute(deps, env, info, msg)
}

#[entry_point]
pub fn query(deps: Deps, env: Env, msg: Cw20QueryMsg) -> StdResult<Binary> {
    // Delegate to cw20-base query
    cw20_query(deps, env, msg)
}
