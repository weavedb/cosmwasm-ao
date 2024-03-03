use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, PartialEq)]
pub enum ExecuteMsg {
    Add { num: u8 },
    Add2 { num: u8, addr: String },
}


#[derive(Serialize, Deserialize, PartialEq)]
pub enum QueryMsg {
    Num {},
}

#[derive(Serialize, Deserialize)]
pub struct NumResp {
    pub num: u8,
}

#[derive(Serialize, Deserialize, PartialEq)]
pub struct InstantiateMsg {
    pub num: u8,
}
