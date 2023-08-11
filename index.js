/* ✅PEDIR EL NOMBRE A USUARIO 
prompt es igual que imput en pyhton  */

/* funcion node (require) = sirve para
 poder traer codigo de otro lado u otro archivo , le pide
 que traiga el codigo y lo guarde en const prompt*/ 


const prompt = require('prompt-sync') ();
const name = prompt("Ingresa tu nombre : ")
 console.log(`hola ${name}`);