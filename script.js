function stringChop(str, size) {
    if (str === null) {
        return [];
    }
    let chunksStr = [];
    for (let i = 0; i < str.length; i += size) {       
        chunksStr.push(str.substring(i, i + size));
    }
    return chunksStr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));


