// la variable cons no se le puede asignar un valor una vez y no se puede cambiar 
const usuario = "juanse";
//asi se declara una variable tipo texto siendo entre comillas "" se llaman string
let name = "samu";
//asi puedo reasignar una variable ya creada 
name = "jaime"
// asi puedo asignar numeros con let number = y el numero que quiero colocar 
let number = 1;
// para ahcer variables bulean debo hacer let bulean = y colocar o true o false solo una 
// uso el typeof para determinar el tipo de variable que voy a usar
let bulean = true;
// puedo crear variables sin asignar y javascript la marcara como undefined
let prueba;
console.log(number)
console.log(typeof(number))
console.log(name);
console.log(typeof(name));
console.log(bulean)
console.log(typeof(bulean))
// puedo cambiar un tipo de variable en cualquier momento
number = "hola mundo"
console.log(typeof(number))
console.log(typeof(prueba))
// puedo imprimir variables que no eh creado previamente
console.log(typeof(prueba2))
// si hay variables con dos palabras la primera es el minuscula y la segunda siempre ira en mayuscula
let fechaActual = new Date(Date.now());
console.log(fechaActual)
console.log("la variable nombre es:"+ number + " y la fecha de hoy es:" + fechaActual)
//`
console.log(`la variable nombre es: ${number} y la fecha de hoy es: ${fechaActual}`)
// array es un arreglo de variables asignandoles posisiones siendo la primera 0 y la ultima depende de cuantos objetos tengas
let array = [number,fechaActual,bulean,"hola como estas"]
console.log(array)
console.log(array[1]);
console.log(typeof(array));
let numero1 = 1
let numero2 = 2
let resultado = numero1 + numero2
let nombre1 = "Juan"
let nombre2 = "Pulido"
let resultado2 = nombre1 + nombre2
let resultado3 = nombre1 + numero1
console.log(resultado) 
console.log(resultado2)
console.log(resultado3)
let array1 = [1, 2, 3, 4]
console.log(array1)
let resultado4 = array1[0] * 2
let resultado5 = array1[1] * 2
let resultado6 = array1[2] * 2
let resultado7 = array1[3] * 2
let array3 = [resultado4, resultado5, resultado6, resultado7]
console.log(array3)


