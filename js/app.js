let carrito = [];

function agregarAlCarrito(nombre, precio) {
    let nuevoProducto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(nuevoProducto);

    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById('listaCarrito');
    let totalElemento = document.getElementById('valorTotal');

    listaCarrito.innerHTML = '';

    let valorTotal = 0;

    carrito.forEach(function(producto) {

        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = producto.nombre + ' - USD ' + producto.precio;

        listaCarrito.appendChild(nuevoElemento);

        valorTotal += producto.precio;
    });

    totalElemento.textContent = valorTotal.toFixed(2); 
}

function limpiarCarrito(){
    carrito = [];
    actualizarCarrito();
}

document.addEventListener('DOMContentLoaded', function() {
    let botonesComprar = document.querySelectorAll('#botonComprar');
    
    botonesComprar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            let contenedorProducto = this.closest('#card');
            let nombreProducto = contenedorProducto.querySelector('#nombreProducto').textContent;
            let precioProducto = parseFloat(contenedorProducto.querySelector('#precioProducto').textContent.replace('USD ', ''));
            agregarAlCarrito(nombreProducto, precioProducto);
        });
    });
});

botonLimpiar.addEventListener("click", function(){
    return limpiarCarrito();  
})


let modalCarrito = document.getElementById('modalCarrito');

    document.addEventListener('DOMContentLoaded', function() {
        let btnCarrito = document.getElementById('btnCarrito');

        btnCarrito.addEventListener('click', function() {
            modalCarrito.style.display = 'block';
        });

        window.onclick = function(event) {
            if (event.target === modalCarrito) {
                cerrarModalCarrito();
            }
        };
    });

    function cerrarModalCarrito() {
        modalCarrito.style.display = 'none';
    }