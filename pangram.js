function isPangram (string) { 
    return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
isPangram('Hello world')
