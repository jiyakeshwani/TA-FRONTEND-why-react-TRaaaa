let input = document.querySelector(`input[type = "text"]`);
let rootElm = document.querySelector(".movie-list");

let allMovies = [
  {
    name: "Incidious",
    watched: false,
  },
  {
    name: "Forest gump",
    watched: false,
  },
];

function createUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie) => {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerText = movie.name;
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = movie.watched;

    input.addEventListener("click", handleClick);

    let span = document.createElement("span");
    span.innerText = "Delete";
    span.addEventListener("click", deleteMovie);
    li.append(h2, input, span);
    rootElm.append(li);
  });
}

function handleClick(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function deleteMovie(event) {
  let id = event.target.id;
  allMovies.splice(id, 1);
  createUI();
}

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createUI();
  }
});
