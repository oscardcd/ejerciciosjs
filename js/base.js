//#region mi codigo
  window.addEventListener("load",inicio);
  window.addEventListener("load",mi_inicio);


  function mi_inicio()
  {
    document.getElementById("cuadrado").addEventListener("click",ccuadrado);
  document.getElementById("circulo").addEventListener("click",ccirculo);
  document.getElementById("limpiar").addEventListener("click",limpiar);
  }

  function ccirculo()
  {
    document.getElementById("circulof").innerHTML="<div id='lcir' class='fcir'><p>CIRCULO</p></div>";
  }
  function ccuadrado(){
    document.getElementById("cuadradof").innerHTML="<div id='lcua' class='fcua'><p>CUADRADO</p></div>";
 }

 function limpiar()
 {
   document.getElementById("lcir").className="";
   document.getElementById("lcir").innerHTML=""
   document.getElementById("lcua").className="";
   document.getElementById("lcua").innerHTML=""
 }
  
//#region funciones documento
  function inicio()
  {
    document.getElementById("cambiartexto").addEventListener("click",cambiartext);
    document.getElementById("cambiarclase").addEventListener("click",cambiarclase);
    document.getElementById("quitarclase").addEventListener("click",quitarclase)
  }

  function cambiartext()
  {
    document.getElementById("p1").innerHTML="primer parrafo cambiardo";
    document.getElementsByTagName("p")[1].innerHTML="segundo parrafo cambiado";
    document.getElementsByClassName("miClase")[0].innerHTML="tercer parrafo cambiado";
  }

  function cambiarclase()
  {
    document.getElementById("p1").setAttribute("class","");
    document.getElementById("p2").className="miClase1";
    document.getElementById("p3").className="miClase1";

  }

  function quitarclase()
  {
    document.getElementById("p1").setAttribute("class","");
    document.getElementById("p2").className="";
    document.getElementById("p3").className="";

  }
  //#endregion
//#endregion

/*alert("Hola");

//Declarar variable
var cadena="Juan";
document.write(cadena+"<br>");
var numero=9.8;
document.write(numero+"<br>");
var numero1=9;
document.write(numero1+"<br>");
//boolenao ofrece dos tipos de datos
var activo=false;
document.write(activo+"<br>");
//Objetos de fecha
var fecha=new Date();//Fecha actual
document.write(fecha+"<br>")

var dia=fecha.getDay();// devuelve el número del día de la semana: desde 0 (domingo) hasta 6 (sábado).
document.write(dia+"<br>")

var mes  = fecha.getMonth();//devuelve el número del mes: desde 0 (enero) hasta 11 (diciembre).
document.write(mes+"<br>")

var anio = fecha.getFullYear();//cuatro dígitos del año.
document.write(anio+"<br>")



//Variables locales y globales

//Variable Global
var nombre="Luisa";

document.write("Fuera de la función"+" "+nombre +"<br>");

function saludo()
{
   document.write("Dentro de la función"+" "+nombre);
 }

 saludo();


//variable local
function saludo()
{
   let nombre="Luisa";
   document.write("Dentro de la función"+" "+nombre);
 }

 saludo();

 document.write("Fuera de la función"+" "+nombre +"<br>");//Esta no va a tener acceso denegado



//CONSTANTE: CONTENEDORES DE DATOS QUE NO VAN A CAMBIAR A LO LARGO DE LA EJECUCIÓN DEL PROGRAMA EJEMPLO.


const pi=3.1416;
document.write(pi);

pi=150;
document.write(pi);





//OPERADORES

var dato=10;
var dato1=20;
//SUMA
var suma=dato+dato1;
document.write(suma+"<br>");
//RESTA
var resta=dato1-dato;
document.write(resta+"<br>");
//MULTIPLICACION
var multi=dato*dato1;
document.write(multi+"<br>");
//DIVISION
var divi=dato1/dato;
document.write(divi+"<br>");
//RESIDUO

var modulo=dato1 % dato;
document.write(modulo+"<br>");
//INCREMENTO
var incremento=dato;
incremento++;
document.write(incremento+"<br>");

//DECREMENTO
var decremento=dato;
decremento--;
document.write(decremento+"<br>");



//OPERADORES RELACIONALES
//PERMITEN DEFINIR EL TIPO DE RELACIONES QUE EXISTEN ENTRE DOS ENTIDADES. 

var dato=10;
var dato1=20;

//Mayor o igual que
var mayorque=dato1 > dato;
document.write("Mayor que: "+ mayorque+"<br>");

//Menor o igual que
var menorque=dato1 < dato;
document.write("Menor que: "+ menorque +"<br>");

//Igual que
var igualque=dato1==dato;
document.write("Igual que: "+igualque +"<br>");

//Diferente
var diferente=dato1 != dato;
document.write("Diferente:  "+ diferente +"<br>");
document.write("<br>");


//OPERADORES LÓGICOS
//OPERADOR Y o AND  &&
var dato=10;
var dato1=20;
var and=(dato > 30 && dato1 < 20)
document.write("AND: "+and +"<br>");
//OPERADOR O  U OR ||
var or=(dato > 30 || dato1 < 50)
document.write("OR: "+or +"<br>");
//OPERADOR DE NEGACIÓN o NOT
var not=!(dato<20);
document.write("NEGACIÓN: "+not);


//OPERADOR TERNARIO O CONDICIONAL
//condicion ? TRUE:FALSE 

//Averiguar cuál de los dos números es mayor.
 var num1=66;
 var num2=200;
 
 if(num1>num2)
 {
   document.write(" num1 es mayor")

 }else{

    document.write("num2 es mayor")
 }


//Un ejemplo ingresando datos desde el teclado
var n1;
var n2;
n1=prompt('Ingrese el primer número:','');
var num=parseInt(n1);

n2=prompt('Ingrese el segundo número:','');
var num1=parseInt(n2);

if(num>num1)
 {
   document.write("El mayor: "+num)

 }else{

    document.write("El mayor: "+num1)
 }


 
// Ternario
var n1;
var n2;
n1=prompt('Ingrese el primer número:','');
var num1=parseInt(n1);

n2=prompt('Ingrese el segundo número:','');
var num2=parseInt(n2);

var resultado=num1>num2 ? " num1 es mayor":"num2 es mayor"; 
document.write(resultado);

 

//Switch
var opcion = 2;
switch (opcion) {
  case 1:
    document.write("Menú Usuario");
    break;
  case 2:
    document.write("Menú Administrativo");
    break;
    case 3:
        document.write("Configuración");
        break;
  default:
    document.write("SALIR");
    break;  
}

 
//CICLO FOR 
//Listar los números del 1 al 5
for(let i=1; i<=5; i++){
    document.write(i);
}



//Con while
var n = 0;
while (n <5) {
  n ++;
  document.write(n);
}


// HAGA MIENTRAS
let i = 0;
do {
  i = i + 1;
  document.write(i);
} while (i < 5);



// 1. FUNCIONES EN JS:Son un conjunto de sentecias
//que realizan una tarea
 function saludo(){
       document.write("Hola a todos");
 }

//Invocar función saludo
 saludo()



//Salto de línea
 document.write("<br>");

//1.1 Con parametros
 function suma(a,b){
   let resultado=a+b;
   document.write(resultado);
 }
 suma(2,9);



//1.2 Retornando valores
function suma(a,b){
  let resultado=a+b;
  return  resultado;
}
document.write(suma(2,9));
 

// 1.3 Podemos pasarle funciones a una variable
var miSuma=function(a,b){
  return a+b;
}
document.write(miSuma(2,9));


//1.4 Las funciones son reutilizables ejemplo. tomemos el ejemplo anterior
var miSuma=function(a,b){
  return a+b;
}
document.write(miSuma(22,49));

document.write("<br>");
document.write(miSuma(80,60));


//1.5 También le podemos pasar variable ejemplo. tomemos el ejemplo anterior
var miSuma=function(a,b){
  return a+b;
}
var n_1=8;
var n_2=78;

document.write("<br>");
document.write(miSuma(n_1,n_2));


//2. FUNCION FLECHA O ARROW FUNCTION: Forma de escribir las funciones en JS. Hacemos este ejemplo, el cual vamos a simpliicar con flecha

var acceso=false;
var accesoU=function (a){
  return a;
}

accesoU(acceso)==true?document.write("Usuario permitido"):document.write("Usuario denegado")



//Simplificar con Arrow
var acceso=true;
var accesoU = a => a//Funcion que retorna una valor

accesoU(acceso)==true?document.write("Usuario permitido"):document.write("Usuario denegado")



// 2.1 Cuando no pasamos parametros, se tienen que poner los parentesis vacios
var acceso=true;
var accesoU = ()=>false;//Función sin parametros 
accesoU(acceso)==true?document.write("Usuario permitido"):document.write("Usuario denegado")



//2.3 Con varios parametro. 
var acceso=true;
               //Interpolación de cadenas
var accesoU = (a,nombre)=>document.write(`Usuario: ${nombre} Acceso: ${a}`);

accesoU(acceso,"Luis");


//2.4 Cuando se devuelva más de un valor en una función hay que colocar las llaves.
var acceso=true;
var accesoU = (a,nombre)=>{
  document.write(`Usuario: ${nombre} en ejecución, `);
  return a;
}
accesoU(acceso,"Gabriel")==true?document.write("Usuario permitido"):document.write("Usuario denegado")



//FUNCIONES  NUMERICAS-MÉTODOS NUMÉRICOS
  //1. isNumber: verdadero si es entero y falso si es decimal
var numero=50;
var res=Number.isInteger(numero);
document.write(res);


   //2. Convierte a entero
   var numero=50.30;
   var res=Number.parseInt(numero);
  document.write(res);



  //3. Reducir decimales
   var numero=50.304050;
   var res=Number.parseFloat(numero).toFixed(3);
  document.write(res);



//OBJETOS: Colección de datos
var user="luz";
var persona= {
  nombre: "Alejo",
  genero: "masculino"
     }

var objeto= {
   nombre: "juan",
   edad:25,
   importante: true,
   //Podemos tener un texto interpolado
   texto: `Usuario:  ${user}`,
   //Podemos tener funciones
   miFuncion: (a,b)=>a+b,
   //Dentro de un objeto se puede tener otro objeto
   otroobjeto: persona,
   fecha: new Date()
}

document.write(objeto);
document.write("<br>");
document.write(objeto.nombre + "<br>");
document.write(objeto.edad+"<br>");
document.write(objeto.importante+"<br>");
document.write(objeto.texto+"<br>");
document.write(objeto.miFuncion(5,9)+"<br>");
document.write(objeto.otroobjeto.genero+"<br>");
document.write(objeto.fecha.getFullYear());
document.write("<br>");
document.write("**************");
document.write("<br>");

//Desestructuración de objetos
var{nombre} = objeto;
document.write(nombre);



//ARREGLOS:Un arreglo es una colección de elementos, o más 
//bien una estructura que nos permite almacenar secuencialmente datos,
// no necesariamente en orden. 
//¿Qué tipo de datos?, en el caso de Javascript,
// cualquiera, pero en general se almacenan datos del mismo tipo. 
//Podemos tener string, numérico, objetos, funciones, arrays.

var miArray=["Ana",2000,32.1,true];
//Acceder a x posición
document.write(miArray[0]+"<br>");
//Acceder a todo el arreglo
document.write(miArray);




//Podemos  crear un arreglo dentro de otro arreglo
var miArray1=["Ana",2000,32.1,true,["Luis",5,false]];
//Cómo acceder a este arreglo
document.write(miArray1[4][1]);




//También podemos tener funciones. 
var permitido="Usuario permitido"
var miFuncion=acceso=>acceso;
var miArray1=["Ana",2000,32.1,true,["Luis",5,false],miFuncion(permitido)];
//Para acceder llegamos a la posición 5 que es donde esta la funcion
document.write(miArray1[5]);



//Los array contienen objetos
var persona= {
  nombre: "Alejo",
  apellido: "Pérez",
  edad: 28,

     }//Le pasamos a nuestro array el objeto

var permitido="Usuario permitido"
var miFuncion=acceso=>acceso;

  var miArray1=["Ana",2000,32.1,true,["Luis",5,false],miFuncion(permitido),persona];
//Llamar el ojeto
document.write(miArray1[6].apellido);





//Declarar un arreglo dentro del objeto persona
var permitido="Usuario permitido";
var miFuncion=acceso=>acceso;
var persona = 
{
 nombre: "Alejo",
 miAutomovil:[
       pintura={
            color:"rojo",
            precio:200,
            marca: "PPK"
       },
       vendedor={
           nombre: "Julian",
           edad:36
       }


 ]
     }
     
    var miArray1=["Ana",2000,32.1,true,["Luis",5,false],miFuncion(permitido),persona];  

    document.write(miArray1[6].miAutomovil[1].edad);




//Averiguar el tipo de dato con el cual estamos trabajando.

var persona={nombre: "Juan", edad: 15};
var nom="Tatiana"
document.write("<br>")
document.write(typeof persona+"<br>");
document.write(typeof persona.edad+"<br>");
document.write(typeof nom+"<br>");




//JSON:  formato de intercambio de datos.
//Ejemplo: a una variable llamada persona. tiene dos propiedades:
//nombre y twiter
 
var persona={
    nombre: "Juan", 
    twiter:"#quedateencasa"};


//que pasa si necesito enviar estos datos a un servidos
// o almacenarlos totalmente

//Para esto hay que convertir estos datos  utilizando el objeto json
//USANDO UN METODO LLAMADO stringify 
//convierte todo lo que tenemos en una cadena de texto

var personaJSON=JSON.stringify(persona)
//Ahora vamos a acceder al json
   document.write(personaJSON);
//Si quiero acceder a nombre, dice que no está definido
  document.write("<br>");
  document.write(personaJSON.nombre);


//Que pasa si ya esta información llego a un servidor,
//y necesitamos convertirla, porque personaJSON es una cadena 
//de texto para esto creo una nueva variable


var nuevaPersona=JSON.parse(personaJSON)
//Este método va a recomponer como un objeto
//para que lo podamos utilizar sin ningún problema. 

document.write("<br>");
document.write("JSON CONVERTIDO")
document.write("<br>");
document.write("************"+"<br>");
document.write(nuevaPersona);

document.write("<br>");
document.write(nuevaPersona.nombre);



//2. Crear el código en JS para imprimir
  // el texto Clase de JS, usando los h
   //del h1-h6
*/

//#endregion