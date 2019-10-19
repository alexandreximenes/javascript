const fullName = 'Alexandre Ximene  s  '

console.log(fullName.charAt(0))

console.log(fullName.charAt(fullName.length)) //error
console.log(fullName.charAt(fullName.length-1))

console.log(fullName.startsWith('A'))
console.log(fullName.startsWith('S'))
console.log(fullName.startsWith('s'))
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.indexOf('a'))
console.log(fullName.indexOf('Xi'))
console.log(fullName.charCodeAt(2))
console.log(fullName.length)
console.log(fullName.replace('a', 'A'))
console.log(fullName.replace(/e/g, 'E'))
console.log(fullName.split(" "))
console.log(fullName.split(/W/g))
console.log(fullName.fontcolor("Arial"))
console.log(fullName.blink())
console.log(fullName.big())
console.log(fullName.trim())
console.log(fullName.trim())
console.log(fullName.repeat(100));
console.log(fullName.search("s"));
console.log(fullName.includes("A", 0));
console.log(fullName.slice(0, 3));
console.log(fullName.substring(0));
console.log(fullName.substring(0,3));
console.log(fullName.replace(/s/g, "|"));
