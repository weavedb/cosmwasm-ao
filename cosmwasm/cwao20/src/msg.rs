use serde::{ Deserialize, Serialize };
use cosmwasm_std::{ Addr };

#[derive(Serialize, Deserialize, PartialEq)]
pub enum ExecuteMsg {
    Mint { Quantity: String },
    Transfer { Quantity: String, Recipient: Addr },
}


#[derive(Serialize, Deserialize, PartialEq)]
pub enum QueryMsg {
    Info {},
    Balance { Target: Addr },
    Balances {}
}

#[derive(Serialize, Deserialize)]
pub struct BalanceResp {
    pub Balance: String,
    pub Ticker: String,
}

#[derive(Serialize, Deserialize)]
pub struct BalancesResp {
    pub Balances: Vec<(Addr, u8)>,
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
