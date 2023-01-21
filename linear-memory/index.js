import wasmInit from "./pkg/linear_memory.js";

const runWasm = async () => {
    const rustWasm = await wasmInit("./pkg/linear_memory_bg.wasm");

    // Part 1
    console.log("Write in WASM, Read in JS, Index 0");

    rustWasm.store_value_in_wasm_memory_buffer_index_zero(24);

    let wasmMemory = new Uint8Array(rustWasm.memory.buffer);
    let bufferPointer = rustWasm.get_wasm_memory_buffer_pointer();

    console.log(wasmMemory[bufferPointer + 0]);


    // Part 2
    console.log("Write in JS, Read in WASM, Index 1");
    wasmMemory[bufferPointer + 1] = 77;

    console.log(rustWasm.read_wasm_memory_buffer_and_return_index_one());

}

runWasm();
