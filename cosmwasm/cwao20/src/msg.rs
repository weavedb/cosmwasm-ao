use serde::{Deserialize, Serialize};
use cosmwasm_std::{ Addr };
#[derive(Serialize, Deserialize, PartialEq)]
pub enum ExecuteMsg {
    Mint { num: String },
}


#[derive(Serialize, Deserialize, PartialEq)]
pub enum QueryMsg {
    Info {},
    Balance { Target: Addr }
}

#[derive(Serialize, Deserialize)]
pub struct BalanceResp {
    pub Balance: String,
    pub Ticker: String,
}

#[derive(Serialize, Deserialize)]
pub struct InfoResp {
    pub Name: String,
    pub Ticker: String,
    pub Denomination: String,
	
}

#[derive(Serialize, Deserialize, PartialEq)]
pub struct InstantiateMsg {
    pub Name: String,
    pub Ticker: String,
    pub Logo: String,
    pub Denomination: String,
}
