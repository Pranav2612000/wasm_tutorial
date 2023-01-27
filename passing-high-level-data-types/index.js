import wasmInit, {
    add_wasm_by_example_to_string,
} from "./pkg/passing_high_level_data_types.js";

const runWasm = async () => {
    const rustWasm = await wasmInit("./pkg/passing_high_level_data_types_bg.wasm");

    const helloString = add_wasm_by_example_to_string("Hello from ");

    console.log(helloString);
}

runWasm();
