use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add_wasm_by_example_to_string(input_string: String) -> String {
    let result = format!("{} {}", input_string, "Wasm by Example");
    return result.into();
}
