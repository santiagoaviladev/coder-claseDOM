setData();

function setData()
{
    let nombre = prompt("Ingresa tu nombre");
    //Get Element By Id
    const myTitle = document.getElementById("titulo");
    myTitle.innerText = `BIENVENIDOS, ${nombre} AL CARRITO DE COMPRAS`;

    const contenedores = document.getElementsByClassName("contenedor");
    
    for(let contenedor of contenedores)
    {
        contenedor.innerText="<h5>VAMOS A SALUDAR</h5>";
    }
    
   

}