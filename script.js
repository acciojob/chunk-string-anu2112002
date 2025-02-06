function stringChop(str, size) {
    if (str === null) {
        return [];
    }
    let chunks = [];
    for (let i = 0; i < str.length; i += size) {       
        chunks.push(str.substring(i, i + size));
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));

