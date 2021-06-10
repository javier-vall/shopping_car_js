//Variables

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaProgramas = document.querySelector("#programas");
let articulosCarrito = [];

//Listeners

cargarEventListeners();

function cargarEventListeners() {
  listaProgramas.addEventListener("click", agregarCurso);

  carrito.addEventListener("click", eliminarCurso);

  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = [];

    vaciarCarrito();
  });
}
//Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    const curso = e.target.parentElement;
    leerDatosCurso(curso);
  }
}

// Elimina curso del carrito de compras

function eliminarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
    carritoHTML();
  }
}

// Funcion leer datos del curso
function leerDatosCurso(curso) {
  console.log(curso);

  const infoCurso = {
    titulo: curso.querySelector("h3").textContent,
    precio: curso.querySelector(".precio").textContent,
    cantidad: 1,
    id: curso.querySelector("button").getAttribute("data-id"),
  };

  //revisa si un elemento existe en el arreglo del carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  // agrega elementos al arreglo carrito
  //articulosCarrito = [...articulosCarrito, infoCurso];

  carritoHTML();
}

//muestra el carrito de compras en el html

function carritoHTML() {
  vaciarCarrito();

  //recorre el carrito
  articulosCarrito.forEach((curso) => {
    const { titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${id}</td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${id}"> X </a>
    </td>
    `;
    //agrega html del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//limpia html del carrito
function vaciarCarrito() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
