/* Usando la estructura de datos de 'Categorías': 

  0. Escriba un mensaje de bienvenida, en un tag <h1> usando manipulación del DOM, para escribir en el documento.
  1. Defina un menú con botones, que muestre las categorías disponibles. 
  2. Modifique la clase de los botones, para que sea 'styledBtn' 
  3. Imprima un mensaje, debajo de los botones, que diga: 'Por favor, selecciona una categoría para continuar'

*/

function init(){
    escribirBienvenida();
    mostrarMenu();
    escribirMensaje();
}

function escribirBienvenida()
{
  const myH1 = document.createElement("h1");
  myH1.innerHTML="Bienvenido";
  document.body.appendChild(myH1);

}

function mostrarMenu()
{
   categorias.forEach((categoria)=>{
     const myBtn = document.createElement("button");
     myBtn.setAttribute("class", "styledBtn");
     myBtn.innerHTML=categoria.nombre;
     document.body.appendChild(myBtn);
   })
}

function escribirMensaje()
{
  const nodoMensaje = document.createElement("p");
  nodoMensaje.innerHTML= "Por favor, selecciona una categoría para continuar:";
  document.body.appendChild(nodoMensaje);
}