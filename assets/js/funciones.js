//3: Declaramos las funciones

// Función para calcular precio del carrito
let montoTotal = 0;

function calculoMontoTotal(sumoOrestoValorProducto, precioProducto) {
  return (montoTotal += operaciones(sumoOrestoValorProducto, precioProducto));
}

// Función para calcular clicks boton
let clicks = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //cada posición es el producto, y el número es las veces que fue añadido al carrito

function calculoClicks(sumoOrestoClicks, numElemento) {
  clicks[numElemento] += operaciones(sumoOrestoClicks, 1); //siempre se agrega o disminuye de a 1 click porque la funcion es llamada al escuchar 1 click en el boton.
}

// Función calculadora operaciones básicas
const operaciones = (op, valor) => {
  if (op === "sumar") {
    return valor;
  } //else if (op === "restar") {
  return -valor;
  //}
};

//Función para deshabilitar el boton "sacar del carrito" cuando no fue añadido nunca el item
function deshabilitarSacarDelCarrito(elemento) {
  elemento.disabled = "true";
}

//Función para habilitar el boton "sacar del carrito" cuando no fue añadido nunca el item
function habilitarSacarDelCarrito(elemento) {
  elemento.disabled = false;
}

//Funcion para corroborar que el elemento está disponible para agregarlo al carrito
function disponibilidadElemento(sumoOrestoClicks, numElemento) {
  calculoClicks(sumoOrestoClicks, numElemento);
  if (clicks[numElemento] <= 0) {
    return false;
  }
  return true;
}

//Función para preguntar si hay stock
function hayStock(numElemento) {
  if (
    productos[numElemento].stock -
      productos[numElemento].peticionParaRestarStock >
    0
  ) {
    return true;
  }
  return false;
}

//Función para sacar uno del stock del producto
function restamosStock(numElemento) {
  productos[numElemento].peticionParaRestarStock++;
}

//Función para crear divs HTML con la info del producto seleccionado para el carrito

const index_contenedorCarrito = document.getElementById("container-carrito");
const index_contenidoCarrito = []; //Cada posicion va a ser un nuevo div que se cree. Asi lo voy a poder localizar.

function crearDivElementoCarrito(numElemento) {
  const creandoDiv = () => {
    index_contenidoCarrito[index_contenidoCarrito.length] =
      document.createElement("div");
    index_contenidoCarrito[
      index_contenidoCarrito.length - 1
    ].innerHTML = `<div class="d-flex flex-row row ${productos[numElemento].id}"<p>${productos[numElemento].nombre} , ${productos[numElemento].precio} $ </p></div>`;
    //Acá lo que hago son 2 cosas. La primera es que en el sidebar aparezca la información del producto seleccionado, y no de cualquier producto. La segunda es crear en ese DIV HTML un nombre de una clase con el ID del producto seleccionado, para rastrearlo y en el caso
    //de que el usuario decida sacar del carrito ese producto, poder sacarlo.
    //Por lo tanto, cuando quiera borrar el div de "contenidoCarrito" con el producto "X", voy a buscar la posición en el array que tenga el innerHTML con Class "X"
    index_contenedorCarrito.appendChild(
      index_contenidoCarrito[index_contenidoCarrito.length - 1]
    );
  };
  creandoDiv();
}

function quitarDivElementoCarrito(numElemento) {
  //EXPLICACION DE TANTOS COMENTARIOS EN LA PARTE INFERIOR DE ESTA FUNCIÓN:
  //Estos comentarios los necesito porque son los codigos que me acercaron al código de arriba.
  //Fue MUCHO prueba y error hasta que finalmente lo conseguí. Realmente Mucho jajajajaja :') Estuve Mucho Mucho tiempo. Y ahora funciona!!!
  //Pd: no se tomen el trabajo de leerlos. Por su propio bien <3

  let pos;
  // let contents;
  const sacarPos = () => {
    for (let i = index_contenidoCarrito.length - 1; i >= 0; i--) {
      if (
        index_contenidoCarrito[i].innerHTML.includes(
          `d-flex flex-row row ${productos[numElemento].id}`
        )
      ) {
        // alert(
        //   `El index_contenidoCarrito[i].innerHTML es ${index_contenidoCarrito[i].innerHTML}`
        // );

        // alert(
        //   `El index_contenidoCarrito[i].parentElement.innerHTML es ${index_contenidoCarrito[i].parentElement.innerHTML}`
        // );
        //contents = index_contenidoCarrito[i].innerHTML;
        //alert("contents es " + contents);
        // alert(
        //   `lo toma, está en lo posicion ${i} del index_contenidoCarrito. El id es ${productos[numElemento].id}`
        // );
        return i;
      } else {
        //alert("Está en el else con el i " + i);
      }
    }
    return -1;
  };
  //alert(`El index_contenidoCarrito[pos] es ${index_contenidoCarrito[pos]}`); //Undefined
  //alert(
  // `El index_contenidoCarrito[pos].innerHTML es ${index_contenidoCarrito[pos].innerHTML}`
  // ); Se traba todo, es porque el contenidoCarrito[0] es un divElement, no funciona con innerHtml */
  //alert(`El index_contenidoCarrito es ${index_contenidoCarrito}`);

  /* const boxclass = document.getElementsByClassName(
    `d-flex flex-row row ${productos[numElemento].id}`
  );
  let pos;
  const sacarPos = () => {
    for (let i = boxclass.length - 1; i >= 0; i--) {
      //index_contenidoCarrito.length
      if (
        boxclass[i].parentElement.innerHTML.includes(
          `d-flex flex-row row ${productos[numElemento].id}`
        )
      ) {
        //alert(`lo toma, está en lo posicion ${i} del array boxclass.`);
        return i;
      } else {
        //alert("no lo toma");
        return -1;
      }
    }
  };Esto funciona hermoso, pero quiero ver si puedo hacerlo mejor*/
  pos = sacarPos(); //Con esto saco la posición dentro del array index_contenidoCarrito
  //alert("La posicion es " + pos);
  //alert(`El index_contenedorCarrito es ${index_contenedorCarrito}`);
  //alert(
  //  `El index_contenedorCarrito.innerhtml es ${index_contenedorCarrito.innerHTML}`
  //);
  //alert(`El index_contenedorCarrito[pos] es ${index_contenedorCarrito[pos]}`);
  //alert(
  //  `El boxclass[pos].parentElement.innerHTML es ${boxclass[pos].parentElement.innerHTML}`
  //); //esto es lo que hay que borrar del coso de abajo, este es el codigo del array[pos] completo.
  // alert(
  //   `El index_contenedorCarrito.innerhtml es asi ${index_contenedorCarrito.innerHTML}`
  // );
  if (pos != -1) {
    //index_contenedorCarrito.innerHTML.removeChild(boxclass[pos].parentElement.innerHTML);
    // index_contenedorCarrito.innerHTML.replace(
    //   `El boxclass[pos].parentElement.innerHTML es ${boxclass[pos].parentElement.innerHTML}`,
    //   ""
    // ); El mejor hasta ahora
    // index_contenedorCarrito.innerHTML.replace(
    //   `${boxclass[pos].parentElement.innerHTML}`,
    //   ""
    // );

    index_contenedorCarrito.removeChild(index_contenidoCarrito[pos]);
    index_contenidoCarrito.splice(pos, 1); //Se actualiza el nuevo array para que baje una posición a todos los demas elementos
  } else {
    // alert(
    //   "objeto no encontrado. El array tiene " +
    //     index_contenidoCarrito.length +
    //     "posiciones"
    // );
  }
  // alert(`El index_contenedorCarrito quedo así ${index_contenedorCarrito}`);
  // alert(
  //   `El index_contenedorCarrito.innerhtml quedo asi ${index_contenedorCarrito.innerHTML}`
  // );
  // alert(
  //   `El index_contenedorCarrito[pos] quedo asi ${index_contenedorCarrito[pos]}`
  // );

  // const array1 = [5, 12, 50, 130, 44];
  // console.log(array1.findLastIndex((element) => element > 45));
  // // Expected output: 3
  /*if (
    boxclass[
      index_contenidoCarrito.length - 1
    ].parentElement.innerHTML.includes(
      `d-flex flex-row row ${productos[numElemento].id}`
    )
  ) {
    alert("lo toma");
  } else {
    alert("no lo toma");
  }*/
  /*let pos = index_contenidoCarrito.findLastIndex((e) => {
    //ME ESTA DANDO QUE ES UN HTMLdivElement, quiero sacarle el class para comprarlo como está
    //en la linea de abajo y poder borrar el elemento del sidebar, espero lograrlo mañana...
    //Los otros pasos. En fin lo que quiero intentar es con el "e", o sino de alguna otra forma, encontrar la clase
    //del producto seleccionado. Uso el "e" porque es lo que necesita la función findLastIndex.
    //Porque esa función recorre un array y me dá la posición del último elemento que cumple la condición, para poder sacarlo.
    //Osea esa función me viene excelente, solo quiero ver como llegar desde el HTMLdivElement a su clase.
    //e == `d-flex flex-row row ${productos[numElemento].id}`
    // for(let i=0; i<index_contenidoCarrito.length; i++)
    // {
    // }
  });*/
  // alert(pos);
  //de aca para abajo
  // alert(clase);
  // let pos = index_contenidoCarrito.findLastIndex(
  //   (e) => e == elementoParaBorrar.className
  // );
  // alert(pos);
  // let pos = index_contenidoCarrito.findLastIndex(
  //   (e) => e.className == `d-flex flex-row row ${productos[numElemento].id}`
  // );
  // alert(pos);
  //de aca para arriba
  //const boxid = document.getElementById(`${productos[numElemento].id}`);
  // alert(box.length);
  // alert(box[0].innerHTML);
  // alert(box[0].parentNode.innerHTML);
  // alert(box[0].parentElement.innerHTML);
  //alert(box[0].parentElement.className); Descomentar luego
  //alert(index_contenedorCarrito.innerHTML); //este lo toma
  // alert(index_contenidoCarrito[0].innerHTML); //este no lo toma, y yo necesito que este lo tome porque es el que tiene el array que diferencia la clase.
  /* Esto SIII FUNCIONA
  if (index_contenedorCarrito.innerHTML.includes("001")) {
    alert("lo toma");
  } else {
    alert("no lo toma");
  }
  alert(boxclass[0].parentElement.innerHTML);

  if (boxclass[0].parentElement.innerHTML.includes("001")) {
    alert("lo toma");
  } else {
    alert("no lo toma");
  }
  if (
    boxclass[0].parentElement.innerHTML.includes(
      `d-flex flex-row row ${productos[numElemento].id}`
    )
  ) {
    alert("lo toma");
  } else {
    alert("no lo toma");
  }
  if (
    boxclass[
      index_contenidoCarrito.length - 1
    ].parentElement.innerHTML.includes(
      `d-flex flex-row row ${productos[numElemento].id}`
    )
  ) {
    alert("lo toma");
  } else {
    alert("no lo toma");
  }*/
  // alert(index_contenedorCarrito.innerHTML.id);
  // alert(productos[numElemento].id);
  // //  alert(boxid[0].length);
  // alert(boxid[3]);
  // alert(boxid[0].parentElement);
  // alert(boxid[0].innerHTML);
  // alert(boxid[0].parentElement.innerHTML);
  // alert(boxid[0].parentElement.id);
  // alert(box.innerHTML);
  // alert(box.className); //  "shape orange"
  // alert(typeof box.className); //String
  //alert(index_contenidoCarrito.classList);
  /*if (
    index_contenidoCarrito[0].innerHTML.className == `d-flex flex-row row 001`
  ) {
    alert("lo toma");
  } else {
    // alert(
    //  "no lo toma. El className es" +
    //   index_contenidoCarrito[0].innerHTML.className
    //);
  }
  //de aca para abajo
  // let pos = index_contenidoCarrito.findLastIndex(
  //   (e) =>
  //     e.className ===
  //     index_contenidoCarrito[index_contenidoCarrito.len].innerHTML.className(
  //       `d-flex flex-row row ${productos[numElemento].id}`
  //     )
  // );*/
  //----------------------------------------------------------------
  // let d = document.getElementById("top");
  // let d_nested = document.getElementById("nested");
  // let throwawayNode = d.removeChild(d_nested);
  //de aca para arriba
}

//Función para agregar o sacar un producto del carrito
function agregarOsacarDelCarrito(numElemento, sumoOresto) {
  if (sumoOresto === "sumar") {
    carrito.push(productos[numElemento]); //se agrega el producto al carrito
    crearDivElementoCarrito(numElemento); //Se crea un div en html con el nuevo producto del carrito. Osea se lo muestra al usuario en el sidebar.
    Swal.fire(
      "Buen Trabajo!",
      `Se añadió el producto
    ${productos[numElemento].nombre}
     al carrito exitosamente`
    );
  } else {
    //aca lo que hago es borrar el ultimo elemento del array que tenga el mismo "numElemento" (o producto) que el parametro (que es el tipo de producto seleccionado).
    //Osea, si se agrego hamburguesa, despues se agrego papas fritas, y se saco hamburguesa, quiero que borre el ultimo elemento que diga hamburguesa.

    let posicion = carrito.findLastIndex((e) => e === productos[numElemento]);

    if (posicion != -1) {
      carrito.splice(posicion, 1);
      quitarDivElementoCarrito(numElemento); //Se quita el div en html con el producto que se deseó sacar del carrito.
      Swal.fire(
        `Se ha quitado el producto
      ${productos[numElemento].nombre}
       del carrito`
      );
    }
  }
}

//Funcion para sumar un producto al carrito
function anadirCarrito(elemento, numElemento, sumoOresto, precioProducto) {
  if (hayStock(numElemento) == true) {
    //para ver si hay stock
    restamosStock(numElemento); //se resta el stock de ese producto
    agregarOsacarDelCarrito(numElemento, sumoOresto); //Se agrega o saca del carrito, dependiendo el boton que apretó el usuario
    if (disponibilidadElemento(sumoOresto, numElemento) == true) {
      //Para habilitar o deshabilitar el boton "sacar del carrito"
      //Si el usuario apretó agregar al carrito:
      habilitarSacarDelCarrito(elemento, sumoOresto); //Se habilita Sacar del carrito
    } else {
      //Si el usuario apretó sacar del carrito y ya no hay más ese producto en el carrito:
      deshabilitarSacarDelCarrito(elemento); //Se deshabilita Sacar del carrito para ese producto
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No hay más stock disponible!",
    });
    alert("No hay más stock de este producto"); //Despues lo puedo generar con la librería de la última clase.
  }
}

function creandoNuevaFecha() {
  fechaCompras[fechaCompras.length] = new Date(); //se crea una nueva fecha y se la guarda en el array
  return fechaCompras[fechaCompras.length - 1]; //se devuelve esa fecha. Se pone el -1 porque apenas se creo la fecha se aumentó el length del array
}

function creandoObjetoCompras() {
  //creo un objeto nuevo de Compras. Va a tener el nombre "nombreCompras[i]".
  //Este objeto va a tener la información del carrito (osea de la compra del usuario) junto a la fecha de la compra, del dni del usuario y del id de la factura.

  nombreCompras[nombreCompras.length] = new Compra(
    nombreCompras.length.toString(), //id factura. Va a tener el id de la cantidad de compras. Osea, si se hicieron 3 compras en el e-commerce, el id va a ser "3".
    "41262838", //dni usuario, estoy trabajando intensamente para llegar a poner el dni de cada usuario, por ahora escribo el mio y estoy trabajando para llegar a escribir de cada uno segun casa usuario.
    carrito, //productos comprados, aca quiero mandar al constructor Compra el array del carrito con todos los "productosComprados"
    creandoNuevaFecha() //fecha Actual
  );
  //nombrecompras[nombrecompras.length].agregandoCompra();

  nombrecompras[nombrecompras.length].agregandoCompra();
  alert(compras.length);
  //nombrecompras[nombrecompras.length].mensajeCreacionCompra();
  //alert(compras.length);
}

//Función para reiniciar Arrays
function reiniciandoArray(a) {
  a.splice(0, a.length);
}

//Función para esconder elementos
function esconderElementos(e) {
  e.className = "no-visible";
}

//Función para mostrar elementos escondidos
function mostrarElementos(e) {
  e.className = "visible";
}

//Función para que aparezcan los productos seleccionados en el SELECT del HTML, y los no seleccionados desaparezcan
function mostrarProductosSeleccionados(e) {
  e.preventDefault();
  //Quiero tomar el valor del select para despues hace un switch(case) y segun el valor que sea,
  //que selects van a estar visibles y cuales no.

  switch (select_catalogo.value) {
    case "electrodomesticos":
      mostrarElementos(section_producto1);
      mostrarElementos(section_producto2);
      mostrarElementos(section_producto3);
      esconderElementos(section_producto4);
      esconderElementos(section_producto5);
      esconderElementos(section_producto6);
      esconderElementos(section_producto7);
      esconderElementos(section_producto8);
      esconderElementos(section_producto9);
      break;

    case "alimentos":
      esconderElementos(section_producto1);
      esconderElementos(section_producto2);
      esconderElementos(section_producto3);
      mostrarElementos(section_producto4);
      mostrarElementos(section_producto5);
      mostrarElementos(section_producto6);
      esconderElementos(section_producto7);
      esconderElementos(section_producto8);
      esconderElementos(section_producto9);
      break;

    case "productoslimpieza":
      esconderElementos(section_producto1);
      esconderElementos(section_producto2);
      esconderElementos(section_producto3);
      esconderElementos(section_producto4);
      esconderElementos(section_producto5);
      esconderElementos(section_producto6);
      mostrarElementos(section_producto7);
      mostrarElementos(section_producto8);
      mostrarElementos(section_producto9);
      break;

    default: //todos
      mostrarElementos(section_producto1);
      mostrarElementos(section_producto2);
      mostrarElementos(section_producto3);
      mostrarElementos(section_producto4);
      mostrarElementos(section_producto5);
      mostrarElementos(section_producto6);
      mostrarElementos(section_producto7);
      mostrarElementos(section_producto8);
      mostrarElementos(section_producto9);
      break;
  }
}

function poniendoContadorSacarCarritoEnCero() {
  clicks = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto1);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto2);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto3);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto4);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto5);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto6);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto7);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto8);
  deshabilitarSacarDelCarrito(button_sacarDelCarrito_producto9);
}

function vaciandoListaCompleta() {
  //Para vaciar todos los elementos visuales del carrito
  index_contenedorCarrito.innerHTML = "";
  index_contenidoCarrito.splice(0, index_contenidoCarrito.length);
}
function cancelarCompra() {
  poniendoContadorSacarCarritoEnCero(); //Para que al momento de cancelar la compra, vuelva el contador de sacar del carrito al valor original
  vaciandoListaCompleta(); //Para vaciar todos los elementos visuales del carrito
  reiniciandoArray(carrito); //se reinicia el carrito
}

function finalizarCompra() {
  creandoObjetoCompras(); //acá está el error que no llegué a corregir, y que por eso no lee lo de abajo. Gracias
  setInterval(() => {
    Swal.fire(
      "Excelente!",
      "Muchas Gracias por confiar en Nosotros!",
      "Compra Realizada Exitosamente"
    );
  }, 1000);
  clearInterval();

  poniendoContadorSacarCarritoEnCero(); //Para que al momento de cancelar la compra, vuelva el contador de sacar del carrito al valor original
  vaciandoListaCompleta(); //Para vaciar todos los elementos visuales del carrito
  reiniciandoArray(carrito); //se reinicia el carrito
}
