function displayPoem(response) {
  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-text", {
    strings: `Generating a poem`,
    autoStart: true,
    delay: 10,
    cursor: "",
  });

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "aca2a4of530d0tf79751324ac6b3f501";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are an AI that creates short poems, max 5 rows. you write the poems separating each line with a <br />. You sign every poem with <strong>The AI Poem Generator</strong> at the END of every poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-text");
  poemElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

//built api url
// make a call
// display generate poem
