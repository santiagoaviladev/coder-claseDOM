setData();

function setData()
{
    let nombre = prompt("Ingresa tu nombre");
    //Get Element By Id
    const myTitle = document.getElementById("titulo");
    myTitle.innerHTML = `<span style="color:red">BIENVENIDOS</span>, ${nombre} AL CARRITO DE COMPRAS`;

    const contenedores = document.getElementsByClassName("contenedor");
    
    for(let contenedor of contenedores)
    {

        console.log(contenedor);
        contenedor.innerHTML=`<h5 style="margin:20px">VAMOS A SALUDAR<br>
                                     HOLA AMIGOS</h5>`;
    }
    
   

}