var nombre, edad, sexo;
var contador = 0, promedadh=0, promedadm=0, nm=0, edadh=0, nh=0, edadm=0, Medad = 0;
var nomedadM = "";


function ingresar() {
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    sexo = document.getElementById("sexo").value;
   
    if(validarDatos())
    {
        operacion();
    }
    limpiarCampo();
}

function validarDatos() {

    if (nombre == "" || edad == "" || sexo == "") {
        alert("ingrese los datos correctamente");
        return false;
    }
    else {
        if (edad < 18) {
            alert("no se permite menores de edad");
            return false;
        }
    }
    return true;

}

function operacion() {
   
    contador++;

    if (Medad < edad) {

        nomedadM = nombre;
        Medad = edad;

    }
    if (sexo == "masculino") {

        nh++;
        edadh +=parseInt(edad);
        
    }
    else {

        nm++;
        edadm +=parseInt(edad); 
        
    }
    promedadm = edadm / parseInt(nm);
    promedadh = edadh / parseInt(nh);
    
    
}

function mostrar() {
    document.getElementById("totpers").innerHTML = "el total de asistentes es: " + contador;
    document.getElementById("promedhom").innerHTML = "el promedio de edad de los hombre es: " + promedadh;
    document.getElementById("promedmuj").innerHTML = "el promedio de edad de las mujeres es: " + promedadm;
    document.getElementById("nomperM").innerHTML = "el nombre de la persona de mayor edad es: " + nomedadM;
}
function limpiarCampo() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = Seleccionar;
    document.getElementById("nombre").focus();
    

   
}



