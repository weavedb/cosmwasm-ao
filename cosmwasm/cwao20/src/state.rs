use cosmwasm_std::{ Addr };
use cw_storage_plus::{ Map, Item };

pub const BALANCES: Map<Addr, u128> = Map::new("balances");
pub const OWNER: Item<Addr> = Item::new("owner");
pub const NAME: Item<String> = Item::new("name");
pub const TICKER: Item<String> = Item::new("ticker");
pub const DENOMINATION: Item<u128> = Item::new("denomination");
pub const LOGO: Item<String> = Item::new("logo");
