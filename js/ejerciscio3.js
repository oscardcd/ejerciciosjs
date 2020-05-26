var nombre,identificacion=0;
var salario=0,ahorro=0,horas=0;

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

}