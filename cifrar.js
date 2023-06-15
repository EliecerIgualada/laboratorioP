const bc = require ("bcryptjs")
bc.genSalt(10, (error, salt)=>{
    if (error)
    console.log(error)
    else 
    console.log(salt)
})

bc.genSalt(10, (error, salt)=>{
    if (error)
    console.log(error)
    else 
    {
        bc.hash("Esto es la contraseña", salt, (error, hash)=>{
            if (error)
            console.log(error)
            else
            console.log(hash)
        })
    }
})
console.log("Esto va de primero.")
//
var salt=bc.genSaltSync(10);
console.log("Salt generado de manera sincrona "+salt)
//
var hash = bc.hashSync("Esto se codifica ",salt)
console.log("hash generado de manera síncrona "+hash)
// este es el punto en el que se compara el hash
var comparar = bc.compareSync("Esto se codifica ","$2a$10$Qra9JWYZ6B4GAjTWZlBjAOrU1Xrp319yH7qYITG6D14/OK5hBOdXG")
console.log(comparar)

