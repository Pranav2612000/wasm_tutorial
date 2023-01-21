import init from './pkg/hello_world.js';

const runWasm = async () => {
    const helloWorld = await init("./pkg/hello_world_bg.wasm");

    const addResult = helloWorld.add(1, 4);

    document.body.textContent = `Hello World! Result: ${addResult}`;
}

runWasm();
