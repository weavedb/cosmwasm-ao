use cosmwasm_std::{entry_point, Deps, Binary, DepsMut, Env, MessageInfo, Response, StdResult};
use cw20_base::contract::instantiate as cw20_instantiate;
use cw20_base::contract::query as cw20_query;
use cw20_base::contract::execute as cw20_execute;
use cw20_base::msg::{InstantiateMsg, QueryMsg, ExecuteMsg};

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response, cw20_base::ContractError> {
    cw20_instantiate(deps, env, info, msg)
}

#[entry_point]
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    cw20_query(deps, env, msg)
}

#[entry_point]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, cw20_base::ContractError> {
    cw20_execute(deps, env, info, msg)
}
