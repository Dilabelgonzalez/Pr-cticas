var Número1=prompt("Introduzca el primer numero:");
var Número2=prompt("Introduzca el segundo numero:");

if (Número1>=0 && Número2>=0) 
{
    document.write("<h2>Hay dos n&uacutemeros positivos: ",Número1," y ", Número2,"</h2>");
}

if (Número1<0 && Número2<0) 
{
    document.write("<h2>Hay dos n&uacutemeros negativos: ",Número1," y ", Número2,"</h2>");
}

if (Número1>=0 && Número2<0) 
{
    document.write("<h2>Hay un n&uacutemero positivo y uno negativo: ",Número1, " y ",Número2,"</h2>");
}

if (Número1<0 && Número2>=0) 
{
    document.write("<h2>Hay un n&uacutemero negativo y uno positivo: ",Número1, " y ", Número2,"</h2>");
}