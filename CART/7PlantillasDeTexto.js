modificarPlantilla();
function modificarPlantilla()
{
    const contenedor = document.getElementById("lista");
    const nombre = prompt("Ingresa un nombre");
    contenedor.innerHTML=`<div>
                            <h5>${nombre}</h5>
                            <p>Esto es un carrito de compras</p>
                          </div>`

    const myUl = document.createElement("ul");

    categorias.forEach((categoria)=>{
            
    myUl.innerHTML+=`
            <li>Nombre Categoria: ${categoria.nombre}<br>
            Id Categoría: ${categoria.id}</li>`

    });

    contenedor.appendChild(myUl);


}