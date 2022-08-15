const names = ["ryan", "joe", "maria"];
const names2 = ["marcos", "mario", "john"];

// desestructuración de arreglos:
console.log([...names, ...names2])

const user = {
    name: "ryan",
    lastname: "ray",
}

const address = {
    street: "main streat 123",
    city: "bogota"
}

const userInfo = {...user, ...address}
console.log(userInfo)