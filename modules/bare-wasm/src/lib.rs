extern {
    fn set(num: u8);
    fn get() -> u8;
}

#[no_mangle]
pub extern fn add(num: u8) {
    unsafe { set(num + ext()) };
}

#[no_mangle]
pub extern fn ext() -> u8 {
    unsafe { get() }
}
