//1. Creando los objetos

const productos = []; //Es la base de datos de los productos que hay en el mercado.

class Producto {
  //se crea el producto
  constructor(id, nombre, imagen, alt, precio, stock, peticionParaRestarStock) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.alt = alt;
    this.precio = parseInt(precio);
    this.stock = parseInt(stock);
    this.peticionParaRestarStock = parseInt(peticionParaRestarStock);
    //Cuando se realiza una compra, se va disminuyendo el stock del producto para poder decirle al usuario que si no hay stock no se puede
    //agregar ese producto a la compra. Pero que pasa si el usuario despues toca Cancelar? Por eso pongo la variable
    //peticionParaRestarStock, porque así Si el usuario acepta, se lo resta, pero si pone cancelar compra, no se lo resta.
    this.agregandoProductos();
  }
  agregandoProductos() {
    productos.push(this); //agrega los productos a un array.
  }
}

const usuarios = []; //base de datos con los usuarios

class Usuario {
  //se crea el usuario
  constructor(dni, nombre, apellido, fechaNacimiento) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.agregandoUsuarios();
  }
  agregandoUsuarios() {
    usuarios.push(this);
  }
}

let nombreCompras = []; //Es una lista que solo sirve para crear objetos con distinto nombre: "compra1", "compra9".
//No lo puedo crear uno por uno porque no sé cuantas compras va a hacer el usuario, asi que lo creo como una lista compra[1], compra[9]...
//Es una lista SOLO para crear distintos nombres a los objetos "compra". Este array lo uso en la función finalizarCompra();

const compras = []; //Aqui iran todas las compras realizadas, con el idfactura, dniusuario, preciofinal, fecha, todo.

class Compra {
  //se crea la compra
  constructor(idFactura, dniUsuario, productosComprados, fechaActual) {
    this.idFactura = idFactura; //Las facturas son lo que diferencian a cada compra, no el usuario, ya que cada usuario puede hacer multiples compras.
    this.dniUsuario = dniUsuario; //Cada compra puede tener un usuario diferente, o no...
    this.productosComprados = productosComprados; //Es un array que tiene objetos producto 1, producto 2, etc...
    this.fechaActual = fechaActual; //Para ver que día se realizó la compra
    this.precioFinal = this.calcularPrecioFinal(productosComprados);
    this.agregandoCompra();
    this.mensajeCreacionCompra();
  }
  agregandoCompra() {
    compras.push(this);
  }
  mensajeCreacionCompra() {
    Swal.fire(`
      Se agrego la compra  
         del usuario con el dni  
        ${this.dniUsuario}. Hay 
        ${compras.length} 
         compras realizadas. El monto final a abonar de esta compra es de ${this.precioFinal}
         `);
  }
  calcularPrecioFinal(productosComprados) {
    let montoFinal = 0;
    for (
      let i = 0;
      i < productosComprados.length;
      i++ //Proximamente lo cambio a foreach...
    ) {
      //montoFinal += operaciones("sumar", productosComprados[i].precio);
      montoFinal += productosComprados[i].precio;
    }

    return montoFinal;
  }
}

let carrito = []; //va a ser el listado que tenga los productos que el usuario vaya seleccionando hasta apretar Comprar o Cancelar Compra.

const producto1 = new Producto(
  "001",
  "Monitor gamer benq",
  "./assets/img/monitor1-468x378px.png",
  "Imagen monitor benq",
  "519000",
  "100",
  "0"
);

const producto2 = new Producto(
  "002",
  "Monitor gamer DFD",
  "./assets/img/monitor2-468x378px.png",
  "Imagen monitor dfd",
  "65700",
  "100",
  "0"
);

const producto3 = new Producto(
  "003",
  "Monitor gamer aad",
  "./assets/img/monitor3-468x378px.png",
  "Imagen monitor aad",
  "435900",
  "100",
  "0"
);

const producto4 = new Producto(
  "004",
  "Hamburguesa doble crunchy",
  "./assets/img/hamburguesa-468x378px.png",
  "Imagen hamburguesa",
  "2000",
  "100",
  "0"
);

const producto5 = new Producto(
  "005",
  "Ensalada Healthy Natural",
  "./assets/img/ensalada-468x378px.png",
  "Imagen ensalada",
  "1500",
  "100",
  "0"
);

const producto6 = new Producto(
  "006",
  "Papas Fritas Salty Doradas",
  "./assets/img/papas-fritas-468x378px.png",
  "Imagen papas fritas",
  "1000",
  "100",
  "0"
);

const producto7 = new Producto(
  "007",
  "Aspiradora Robot Samsung",
  "./assets/img/aspiradora-468x378px.png",
  "Imagen aspiradora",
  "100000",
  "100",
  "0"
);

const producto8 = new Producto(
  "008",
  "Plancha a Vapor Philips",
  "../assets/img/plancha-468x378px.png",
  "Imagen plancha",
  "20000",
  "100",
  "0"
);

const producto9 = new Producto(
  "009",
  "Limpiador Cif Vidrios 500 ml",
  "./assets/img/limpiavidrios-468x378px.png",
  "Imagen limpiador ventanas",
  "4000",
  "100",
  "0"
);

const fechaCompras = []; //Es una lista que solo sirve para crear objetos con distinto nombre: "fechaCompra1", "fechaCompra9".
//No lo puedo crear uno por uno porque no sé cuantas compras va a hacer el usuario, asi que lo creo como una lista fechacompra[1], fechacompra[9]...
//Es una lista SOLO para crear distintos nombres a los objetos "Date". Este array lo uso en la función finalizarCompra();
