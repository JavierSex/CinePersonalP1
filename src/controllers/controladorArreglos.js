let nombres=["Jose", "Jaimito", "Pablito", "clavo", "UnClavito"]

//escribir un ciclo que repita una accion

//variable contadora o auxiliar (i)

for(let i=0; i < nombres.length; i++){  //se puede hacer i < 5 o i < = 4 para que el ciclo se cumpla 5 veces, al uso de esta programacion se le llama programacion imperativa
    console.log(nombres[i])
}

console.log

//aqui vamos a ver los array metodos se le conoce como formas declarativas y son tecnologias nuevas.
//forma de reescribir un ciclo for con js
//LOS METODOS LLEVAN () Y ANTEPONEN UN .  LAS FUNCIONES LLEVAN(){} Y UN NOMBRE OPCIONAL
/*nombres.forEach(function(nombre){
    console.log(nombres)
})

//Declaracion mediante flecha
nombres.forEach(nombre=>console.log(nombre))
*/

/*let numeros=[1,2,3,4,5,6,7,8,9,10]
numeros.forEach(function(numero){
    console.log(numero)
})*/

// console.log(numero) aqui no salta ni ocurre nada debido a que es una variable local

/*let numeros=[1,2,3,4,5,6,7,8,9,10]
numeros.forEach(function(numero){
    console.log(numero+10)
})*/

/*let salarios=[3500000, 5000000, 8000000]
salarios.forEach(function(salario){
    console.log(salario-(salario*19/100))
})*/

let calificaciones=[3.5,4,2,1.5,3]
//sumar las notas y calcular el promedio
let acum=0
calificaciones.forEach(function(calificacion){    
    acum=acum+calificacion
    
})
console.log(acum-calificaciones.length)