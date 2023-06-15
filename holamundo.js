//1
console.log("Hola mundo")

//2
var nombre = "Eliecer Igualada", edad=21
console.log(nombre, " tiene ",edad," años.")

//3
console.log(`El nombre es ${nombre} la edad es ${edad} años`)

//4
var n1=20, n2=50
console.log(`La suma de los números ${n1 + n2}`);

//5
if (n1>n2)
console.log(`El número mayor es ${n1}`)
else 
console.log(`El número mayor es ${n2}`)

//6 
var arreglo=[23,4,566,65,4,6]
for (var n=0; n<arreglo.length; n++)
    console.log(arreglo[n])
 
for (var n=1; n<=100; n++)
arreglo.push( (Math.random()*10).toFixed(0))

//7
arreglo.forEach(function(numero){
    console.log(numero)

})

console.log("Otra variable") //Es lo mismo que usar la función, FUNCTION.  ()
arreglo.forEach((numero)=>{
    console.log(numero)
})

//8
var persona={"nombre":"Eliecer Igualada", 
             "edad":"40",
             "dirección":"La Chorrera"}
    console.log(persona)
    console.log(persona.nombre)
    console.log(persona.edad)

