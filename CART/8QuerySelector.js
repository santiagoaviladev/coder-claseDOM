conQuerySelector()
function conQuerySelector()
{
    
     //Get Element By Id
     const myTitle = document.querySelector("#titulo");
     console.log(myTitle);
     
     //Get Elements By ClassName
     const contenedores = document.querySelector(".contenedor");
     console.log(contenedores);
 
 
     //Get Elements By Tag Name
     const parrafos = document.querySelector("p");
     console.log(parrafos);


     const parrafosAll = document.querySelectorAll("p");
     console.log(parrafosAll);

     for(let p of parrafosAll)
     {
         console.log(p);
     }


    
    


}