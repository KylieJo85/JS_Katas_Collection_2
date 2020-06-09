function add(a, b) {
    return a + b
}
console.log(add(3, 3))



function multiply(a, b) {

    let c = 0
    for (let index = 0; index < b; index++) {
        c = add(a, c)

    }
    return c
}
console.log(multiply(3, 5))



function power(a, b) {
    let d = 1
    for (let index = 0; index < b; index++) {
        d = multiply(a, d)
    }
    return d
}

console.log(power(3, 4))



function factorial(a, b) {
    let f = 0
    for (let index = 0; index < b; index++) {
        f = power(a, f)
    }
    return f
}
console.log (factorial(4,3))
