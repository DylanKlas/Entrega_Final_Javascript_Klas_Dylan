//5: Esperamos que los botones sean llamados para ejecutar las funciones

//Pregunta (respondida): Porque se hace "const operaciones" y NO "function operaciones"?? No entiendo porque las funciones se guardan un variables. Gracias.
//Respuesta por comentarios en la clase
//Hola Dylan, es mucho mejor guardar en una const la arrow function de esta forma evitamos que pueda ser modificada por error o reutilizado su nombre de la function.

button_agregarAlCarrito_producto1.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto1,
    0,
    "sumar",
    productos[0].precio
  )
);
button_agregarAlCarrito_producto2.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto2,
    1,
    "sumar",
    productos[1].precio
  )
);
button_agregarAlCarrito_producto3.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto3,
    2,
    "sumar",
    productos[2].precio
  )
);
button_agregarAlCarrito_producto4.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto4,
    3,
    "sumar",
    productos[3].precio
  )
);
button_agregarAlCarrito_producto5.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto5,
    4,
    "sumar",
    productos[4].precio
  )
);
button_agregarAlCarrito_producto6.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto6,
    5,
    "sumar",
    productos[5].precio
  )
);
button_agregarAlCarrito_producto7.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto7,
    6,
    "sumar",
    productos[6].precio
  )
);
button_agregarAlCarrito_producto8.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto8,
    7,
    "sumar",
    productos[7].precio
  )
);
button_agregarAlCarrito_producto9.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto9,
    8,
    "sumar",
    productos[8].precio
  )
);
button_sacarDelCarrito_producto1.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto1,
    0,
    "restar",
    productos[0].precio
  )
);
button_sacarDelCarrito_producto2.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto2,
    1,
    "restar",
    productos[1].precio
  )
);
button_sacarDelCarrito_producto3.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto3,
    2,
    "restar",
    productos[2].precio
  )
);
button_sacarDelCarrito_producto4.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto4,
    3,
    "restar",
    productos[3].precio
  )
);
button_sacarDelCarrito_producto5.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto5,
    4,
    "restar",
    productos[4].precio
  )
);
button_sacarDelCarrito_producto6.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto6,
    5,
    "restar",
    productos[5].precio
  )
);
button_sacarDelCarrito_producto7.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto7,
    6,
    "restar",
    productos[6].precio
  )
);
button_sacarDelCarrito_producto8.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto8,
    7,
    "restar",
    productos[7].precio
  )
);
button_sacarDelCarrito_producto9.addEventListener("click", () =>
  anadirCarrito(
    button_sacarDelCarrito_producto9,
    8,
    "restar",
    productos[8].precio
  )
);

button_cancelarCompra.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, Cancelar Compra!",
      cancelButtonText: "No, mejor volvamos!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        cancelarCompra();
        swalWithBootstrapButtons.fire(
          "Compra Cancelada!",
          "Su compra ha sido cancelada exitosamente"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelado", "Tu compra está segura :)");
      }
    });
});
button_finalizarCompra.addEventListener("click", () => finalizarCompra());
button_aceptarSelected.addEventListener("click", (e) =>
  mostrarProductosSeleccionados(e)
);
//Se crea un boton de finalizar compra y otro de cancelar compra.
//En cancelar compra no se guarda el objeto "compra 13"
//En finalizar compra sí se crea el objeto, y se lo guarda en el listado de compras llamado carrito.
//En cancelar compra no se le hace nada al stock de productos.
//En finalizar compra se le resta el stock de los productos que habia en la factura al stock del producto. Osea si se lleva 2 alfajores, quedan 2 alfajores menos en el stock.
//En cancelar compra se manda un Su compra ha sido cancelada
//En finalizar compra se manda un Su compra ha sido tramitada exitosamente
//En ambos desaparece todo lo que había en el sidebar
//En ambos la variable "PeticionParaRestarStock" va a 0 de nuevo.
