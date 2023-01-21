import wasmInit from "./pkg/exports.js";

const runWasm = async () => {
    const rustWasm = await wasmInit("./pkg/exports_bg.wasm");

    const result = rustWasm.call_me_from_javascript(1, 4);

    console.log(result);
    console.log(rustWasm.ADD_CONSTANT);
    console.log(rustWasm.add_integer_with_constant);
}

runWasm();
