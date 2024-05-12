use cw_storage_plus::Item;
pub const BALANCE: Item<u8> = Item::new("balance");
pub const NAME: Item<String> = Item::new("name");
pub const TICKER: Item<String> = Item::new("ticker");
pub const DENOMINATION: Item<u8> = Item::new("denomination");
pub const LOGO: Item<String> = Item::new("logo");
