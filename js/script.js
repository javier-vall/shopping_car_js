const url = "./js/data.json";
const deck = document.getElementById("card-deck");

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

let programs = fetchData();

programs.then((respuesta) => {
  respuesta.map((program) => {
    let price = program.price * 1.12;
    deck.innerHTML += `
    <div class="col-12 col-md-4">
        <div class="card rounded-3 skew  h-100">
          <div class="card-body">
            <h3 class="card-title">${program.title}</h3>
            <p class="card-text">${program.description}</div>
            <p class="text-center h5 my-3 precio">Precio: ${price.toFixed(
              2
            )} $</p>
          <button type="button" class="btn btn-dark" data-id="${
            program.id
          }">Agregar al Carrito</button>
        </div>
    </div>
  `;
  });
});

fetch("https://www.scorebat.com/video-api/v1/")
  .then((response) => response.json())
  .then((data) => {
    console.log(
      data.filter(
        (user) => user.username === "Bret" && user.password === "asdashd"
      )
    );
  });
