getInputs();

function getInputs()
{

    const nombre = document.getElementById("nombre").value;
    const titulo = document.getElementById("titulo");

    titulo.innerText=`Bienvenido, ${nombre}`;
    

}