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

console.log(power(3, 3))



function factorial (a) {
    let f= 1
    for (let index = 1; index <=a; index++ )
    {
        f = multiply (f,index)
    }
    return f
}
console.log(factorial (5))


//Colin helped me to figure out the logic behind the factorial function because I was stuck.//