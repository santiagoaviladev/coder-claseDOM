class Tienda {
    constructor(productos)
    {
        this.productos=productos;
    }

    agregarProducto(producto)
    {
        this.productos.push(producto);
    }

    listarProductos()
    {
       
    }

    buscarProducto(id)
    {

    }

    eliminarProducto(producto)
    {

    }

    modificarProducto(producto)
    {

    }

    sumarPrecios()
    {

    }


}

class Producto  {
    constructor(id,nombre, precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}