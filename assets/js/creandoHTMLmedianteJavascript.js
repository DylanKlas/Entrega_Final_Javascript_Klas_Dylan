//2. Creando el archivo html mediante js

let creandoHtml = () => {
  const index_contenedor = document.getElementById("contenedor");
  const getCharacters = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/DylanKlas/Entrega_Final_Javascript_Klas_Dylan/main/assets/js/data.json"
    );
    const cartelBienvenida = await response.json();

    let divv = document.createElement("div");
    divv.innerHTML = `<h6> Bienvenido ${cartelBienvenida[0].nombre}</h6>`;
    index_contenedor.append(divv);
  };
  getCharacters();

  const index_contenido = document.createElement("div");
  index_contenido.innerHTML = `<div
class="container-fluid d-flex flex-row col-12 overflow-hidden"
id="contenedor"
>
<div
  class="container-fluid d-flex flex-row bg-secondary col-8 justify-content-center overflow-y-scroll vh-100"
>
  <section id="section_productos">
    <section id="section_select">
      <div class="col-12 text-center my-5">
        <form action="#">
          <label for="catalog-select"><b>Catálogo</b></label>
          <select name="catalog-select" id="catalog-select">
            <option value="electrodomesticos">
              Electrodomésticos
            </option>
            <option value="alimentos">Alimentos</option>
            <option value="productoslimpieza">
              Productos de Limpieza
            </option>
            <option value="todos" selected>Todos</option>
          </select>
          <button type="submit" id="index__button_Aceptar-Select" class="btn btn-primary py-0">
            Aceptar
          </button>
        </form>
      </div>
    </section>
    <section id="section-producto-1" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/monitor1-468x378px.png";
            alt="Imagen monitor benq"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Monitor gamer benq</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">519000</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p1"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p1"
              class="btn btn-danger col-4 mx-3" disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-2" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_monitorDfd"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/monitor2-468x378px.png"
            alt="Imagen monitor dfd"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Monitor gamer DFD</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">65700</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p2"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p2"
              class="btn btn-danger col-4 mx-3 "  disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-3" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_monitorAad"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/monitor3-468x378px.png"
            alt="Imagen monitor aad"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Monitor gamer aad</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">435900</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p3"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p3"
              class="btn btn-danger col-4 mx-3 "  disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-4" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_hamburguesa"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/hamburguesa-468x378px.png"
            alt="Imagen hamburguesa"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Hamburguesa doble crunchy</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">2000</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p4"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p4"
              class="btn btn-danger col-4 mx-3 "  disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-5" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_ensalada"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/ensalada-468x378px.png"
            alt="Imagen ensalada"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Ensalada Healthy Natural</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">1500</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p5"
              class="btn btn-success col-4 mx-3" 
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p5"
              class="btn btn-danger col-4 mx-3 " disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-6" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_papasfritas"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/papas-fritas-468x378px.png"
            alt="Imagen papas fritas"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Papas fritas salty doradas</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">1000</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p6"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p6"
              class="btn btn-danger col-4 mx-3 " disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-7" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_aspiradora"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/aspiradora-468x378px.png"
            alt="Imagen aspiradora"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Aspiradora Robot Samsung</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">100000</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p7"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p7"
              class="btn btn-danger col-4 mx-3 " disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-8" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_plancha"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/plancha-468x378px.png"
            alt="Imagen plancha"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Plancha a Vapor Philips</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">20000</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p8"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p8"
              class="btn btn-danger col-4 mx-3 " disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="section-producto-9" class= "visible">
      <div
        class="row d-flex mx-auto container-fluid mb-2"
        id="div_limpiadorVentanas"
      >
        <div class="row d-flex col-6 overflow-hidden">
          <img
            src="./assets/img/limpiavidrios-468x378px.png"
            alt="Imagen limpiador ventanas"
          />
        </div>
        <div class="row d-flex col-6 overflow-hidden bg-gris-mas-claro">
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="text-uppercase">Limpiador Cif Vidrios 500 ml</p>
          </div>
          <div class="row d-flex col-12 mx-auto overflow-hidden">
            <p class="bg-white text-center my-auto">4000</p>
          </div>
          <div
            class="row mx-auto overflow-hidden align-self-center justify-content-center"
          >
            <button
              type="button"
              id="index__button_agregar-al-carrito-p9"
              class="btn btn-success col-4 mx-3"
            >
              Agregar al Carrito
            </button>

            <button
              type="button"
              id="index__button_sacar-del-carrito-p9"
              class="btn btn-danger col-4 mx-3 " disabled
            >
              Sacar del Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</div>

<div
  class="container-fluid d-flex bg-info col-4 overflow-hidden vh-100"
>
  <section id="section_carrito">
    <div class="container d-flex row rounded-5 my-5 overflow-hidden">
      <div class="row mx-auto overflow-hidden align-self-center justify-content-center col-10 ">
        <p class="bg-white rounded-4 p-5 mx-5">
        Bienvenidos al e-commerce de su confianza!! Aquí debajo aparecerán los artículos que usted seleccione!
        </p>
      </div>
      <div class="container-fluid d-flex row" id = "container-carrito"></div>
      <div class="d-flex mx-auto overflow-hidden align-self-center justify-content-center col-6 "
          >
            <button
              type="button"
              id="index__button_finalizar-compra"
              class="btn btn-success mx-1"
            >
              Finalizar Compra
            </button>

            <button
              type="button"
              id="index__button_cancelar-compra"
              class="btn btn-danger mx-1"
            >
              Cancelar Compra
            </button>
          </div>
    </div>
  </section>
</div>
</div>`;
  index_contenedor.appendChild(index_contenido);
};
creandoHtml();
