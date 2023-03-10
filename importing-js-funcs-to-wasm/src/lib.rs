use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
#[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn console_log_from_wasm() {
    log("This console.log is from wasm");
}
