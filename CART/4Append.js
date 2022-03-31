pegarNodos();
function pegarNodos()
{
   let myUl = document.createElement("ul");
   myUl.setAttribute("class", "gianfranco");
   myUl.innerHTML="<li>Item 1</li><li>item 2</li>";

   const lista = document.getElementById("lista");

   lista.appendChild(myUl);





}