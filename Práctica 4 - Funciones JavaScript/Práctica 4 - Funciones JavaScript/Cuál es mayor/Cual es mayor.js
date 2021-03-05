var Número1 = prompt("Introduzca el primer valor:");
var Número2 = prompt("Introduzca el segundo valor:");
var Número3 = prompt("Introduzca el tercer valor:");

document.write("<h2>El valor mayor es: ",Mayor(Número1, Número2, Número3)," </h2>")

function Mayor(v1,v2,v3) 
{
    if (v1 > v2 && v1 > v3) 
    {
        return v1;
    }
    else 
    {
        if (v2 > v1 && v2 > v3)
        {
            return v2;
        }
        else 
        {
            return v3;
        }
    }
}