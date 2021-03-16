const A = document.getElementById("A");

let img = document.createElement("img");
A.appendChild(img);
img.setAttribute("src","imagen clipart.jpg");
img.setAttribute("id","img");

let h2 = document.createElement("h2");
A.appendChild(h2);
h2.innerHTML = "C&oacutemo a&ntildeadir un efecto a una im&aacutegen?"
h2.setAttribute("id","h2");

let p = document.createElement("p");
A.appendChild(p);
p.innerHTML = "Existen muchos plugins para insertar efectos especiales a las im&aacutegenes cuando se les pasa el cursor por encima. Todos esos plugins a&ntildeaden un mont&oacuten de c&oacutedigo a la p&aacutegina, que terminan afectando a la velocidad de la web en si. Si quieres utilizar muy poco c&oacutedigo para as&iacute optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."
p.setAttribute("id","p");
p.setAttribute("align","justify");

let button = document.createElement("button");
A.appendChild(button);
button.innerHTML = "Leer mas"
button.setAttribute("id","button");