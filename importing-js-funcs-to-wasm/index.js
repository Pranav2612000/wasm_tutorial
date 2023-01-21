import wasmInit from "./pkg/importing_js_funcs_to_wasm.js";

const runWasm = async () => {
    const rustWasm = await wasmInit("./pkg/importing_js_funcs_to_wasm_bg.wasm");

    rustWasm.console_log_from_wasm();
}

runWasm();
