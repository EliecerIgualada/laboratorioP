//9
function suma(n1, n2){
    return n1+n2
}

function resta(n1, n2){
    return n1-n2
}

function multiplicacion(n1, n2){
    return n1*n2
}

function division(n1, n2){
    if (n2==0)
    return "no se puede dividir"
    else return n1/n2
}
console.log("La suma es "+suma(10,40))
console.log("la resta es ",resta(20,15))
console.log("La multiplicaión es ",multiplicacion(2,6))
console.log("La división es ", division(20,4))

//10

module.exports = {suma, resta, multiplicacion, division}
// module.exports.suma = suma
console.log(module.exports)