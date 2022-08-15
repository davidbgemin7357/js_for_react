function hello(name) {
    return "Hola " + name;
}

console.log(hello("David"));
console.log(hello("Luis"));

// ===========================
function add(x, y) {
    return x + y;
}

console.log(add(10, 20));
console.log(add(4, 5));
console.log(add(10, 7));

// ===========================
function add2(x = 23.3, y = 0) {
    return x + y;
}

console.log(add2())
console.log(add2(10,20))