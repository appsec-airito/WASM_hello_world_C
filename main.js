(async () => {
    //here the generated wasm file is within the 'out' dir - depending on where your module is locate please feel free to change the path
    const codePromise = fetch('../out/main.wasm')
    const {instance} = await WebAssembly.instantiateStreaming(codePromise)
    console.log(instance)

    //access the contents of an exported memory via buffer
    const buffer = new Uint8Array(instance.exports.memory.buffer) //contain an array buffer something like [ 12, 23445, 34, 1, 'H', 'e', 'l', 'l', 'o',.......]

    //executing function and getting the pointer where the return for the helloWorld() starts and iterating through the buffer
    const pointer = instance.exports.helloWorld()
    let string1 = ""
    for (let i = pointer; buffer[i]; i++) {
        string1 += String.fromCharCode(buffer[i])
    }
    //passing the string the console
    console.log(string1)

    //passing the string to Document
    document.getElementById("container").textContent = string1;

})()
