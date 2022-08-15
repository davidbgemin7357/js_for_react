const user = {
    name: "Ryan",
    lastname: "Perez",
    age: 30,
    address: {
        country: "Colombia",
        city: "Bogotá",
        street: "main street 123",
    },
    friends: ["brandon", "helena"],
    active: true,
    sendMail: function () {
        return `Sending email...`;
    },
};

console.log(user);
console.log(user.name);
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail());


// ===================
const name = 'laptop'
const price = 3000

const newProduct = {
    name,
    price,
}

console.log(newProduct)