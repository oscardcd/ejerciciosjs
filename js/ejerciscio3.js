var nombre,identificacion=0;
var salario=27500,ahorro=0,horas=0,sueldototal;

function ingresar()
{
    nombre=document.getElementById('Nombre').value;
    identificacion=document.getElementById('Identificacion').value;
    ahorro=document.getElementById('ahorro').value;
    horas=document.getElementById('Horas')

    if(validar())
    {
        calcular();
    }
    limpiarcampo();
}

function validar();
{
    if(nombre=="" || identificacion==0 || horas==0)
    {
        alert("no se puede tener datos vacios");
        return;
    }
    return true;
}

function calcular();
{
if(Ahorro==ahorro)
{
sueldototal=parseInt(salario * horas)-2;
}
else
{
sueldototal=parseInt (salario * horas);
}
}

function mostrar()
{
document.getElementById("sueldo").innerHTML="SU sueldo total es: "+sueldototal;
}
function limpiarcampo();
{
document.getElementById("Nombre").value="";
document.getElementById("Identificacion").value=0;
document.getElementById("Horas").value=0;
document.getElementById("Ahorro").value=Selecionar;
document.getElementById("Nombre").focus();
}