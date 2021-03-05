var L = prompt("Introduzca el valor del lado del cuadrado");

document.write("<h2>El valor del per&iacutemetro es: ",Perimetro(L)," </h2>");
document.write("<h2>El valor de la superficie es: ",Superficie(L)," </h2>");


function Perimetro(v) {
    return v*4;
}

function Superficie(v) {
    return v*v;
}