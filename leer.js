const fs = require("fs")

fs.readFile("./numeros.txt",(err, data)=>{
    if (err)
    console.log(err)
    else
    console.log(data.toString())
})
console.log("Esto se imprime")

fs.readFile("./archivo2.txt","base64",(err, data)=>{
    if (err)
    console.log(err)
    else
    console.log(data.toString())
})