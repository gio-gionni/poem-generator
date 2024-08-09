function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-text", {
    strings: "QUI VA IL POEMA",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
