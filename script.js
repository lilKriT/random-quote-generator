const URL = "https://api.quotable.io/random";
const authorsURL = "https://api.quotable.io/authors";

const newQuoteButton = document.querySelector("button#new-quote");
const quote = document.querySelector("p.quote");
const author = document.querySelector("span.author");

const ttsButton = document.querySelector("#tts");

const fetchQuote = async () => {
  newQuoteButton.textContent = "Waiting...";
  newQuoteButton.classList.add("inactive");

  const response = await fetch(URL);
  const data = await response.json();
  if (response.ok) {
    console.log(data);

    newQuoteButton.textContent = "New Quote";
    newQuoteButton.classList.remove("inactive");

    quote.textContent = data.content;
    author.textContent = data.author;
  } else {
    console.log("Error", data);
  }
};

newQuoteButton.addEventListener("click", fetchQuote);

const readQuote = () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.textContent} by ${author.textContent}`
  );
  speechSynthesis.speak(utterance);
};

ttsButton.addEventListener("click", readQuote);
