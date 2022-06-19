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

function handleClick(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function deleteMovie(event) {
  let id = event.target.id;
  allMovies.splice(id, 1);
  createUI();
}

function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie) => {
    let li = createElement(
      "li",
      {},
      createElement("h2", {}, movie.name),
      createElement("input", {
        type: "checkbox",
        checked: movie.watched,
        onclick: handleClick,
      }),
      createElement("span", { onclick: deleteMovie }, "Delete")
    );

    rootElm.append(li);
  });
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
