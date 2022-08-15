function hello() {
    return function() {
        return 'Hola mundo'
    }
}

console.log(hello()())