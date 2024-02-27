use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, PartialEq, Debug, Clone)]
pub enum ExecuteMsg {
    Add { num: u8 },
}


#[derive(Serialize, Deserialize, PartialEq, Debug, Clone)]
pub enum QueryMsg {
    Num {},
}

#[derive(Serialize, Deserialize)]
pub struct NumResp {
    pub num: u8,
}

#[derive(Serialize, Deserialize, PartialEq, Debug, Clone)]
pub struct InstantiateMsg {
    pub num: u8,
}
