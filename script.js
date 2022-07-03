const button = document.getElementById("button");
const bubble = document.getElementById("speech");

function renderJoke(joke) {
  bubble.textContent = joke;
}

async function getJokes() {
  const url = "https://v2.jokeapi.dev/joke/Any";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup}...${data.delivery}`;
    } else {
      joke = data.joke;
    }
  } catch (e) {}
  renderJoke(joke);

  tellMeAJoke(joke);
}

function tellMeAJoke(joke) {
  VoiceRSS.speech({
    key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
    src: joke,
    hl: 'en-us',
    v: 'Amy',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});
}

button.addEventListener("click", getJokes);