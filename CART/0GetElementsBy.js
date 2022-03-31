init();

function init()
{
    //Get Element By Id
    const myTitle = document.getElementById("titulo");
    console.log(myTitle);
    
    //Get Elements By ClassName
    const contenedores = document.getElementsByClassName("contenedor");
    console.log(contenedores);


    //Get Elements By Tag Name
    const parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

}
