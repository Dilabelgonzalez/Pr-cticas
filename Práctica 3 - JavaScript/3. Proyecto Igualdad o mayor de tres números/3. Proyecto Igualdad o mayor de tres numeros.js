var Número1=prompt("Introduzca el primer numero:");
var Número2=prompt("Introduzca el segundo numero:");
var Número3=prompt("Introduzca el tercer numero:");

if (Número1==Número2==Número3) 
{
    document.write ("Todos son iguales.")
} 
else
{
    if (Número1>Número2 && Número1>Número3) 
    {
        document.write (Número1," es el mayor.")
    }
    else
    {
        if (Número2>Número1 && Número2>Número3) 
        {
            document.write (Número2," es el mayor.")
        }
        else
        {
            document.write (Número3," es el mayor.")
        }
    }
}