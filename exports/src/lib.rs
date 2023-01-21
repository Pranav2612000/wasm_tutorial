use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn call_me_from_javascript(a: i32, b: i32) -> i32 {
    return add_integer_with_constant(a, b);
}

const ADD_CONSTANT: i32 = 42;

fn add_integer_with_constant(a: i32, b: i32) -> i32 {
    return a + b + ADD_CONSTANT;
}
