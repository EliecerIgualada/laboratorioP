const express = require("express")
const app = express();

app.get("/",(req, res)=>{
    res.send("Esto es <strong>express.js</strong> ")
})

app.listen(3000, ()=>{
    console.log("Se ha iniciado el servidor")
})