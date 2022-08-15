// * métodos con arrays:
const names = ["ryan", "joe", "maria"];
const names2 = ["marcos", "mario", "john"];

// = forEach:
names.forEach((name) => {
    console.log(name);
    // ryan
    // joe
    // maria
});

// = map:
const newNames = names.map((name) => {
    return `Hola ${name}`;
});

console.log(names); // ['ryan', 'joe', 'maria']
console.log(newNames); // ['Hola ryan', 'Hola joe', 'Hola maria']

// = find:
const nameFound = names.find((name) => {
    if (name === "joe") {
        return name;
    }
});

console.log(nameFound); // joe

// = filter:
const nameFilterd = names.filter((name) => {
    if (name !== "joe") {
        return name;
    }
});

console.log(nameFilterd); // ['ryan', 'maria']

// = concat:
onsole.log(names.concat(names2)); // ['ryan', 'joe', 'maria', 'marcos', 'mario', 'john']


