const URL = "https://api.quotable.io/random";
const authorsURL = "https://api.quotable.io/authors";

const newQuoteButton = document.querySelector("button#new-quote");
// const quote = document.querySelector("p.quote");
// const author = document.querySelector("span#author");

const fetchQuote = async () => {
  newQuoteButton.textContent = "Waiting...";
  newQuoteButton.classList.add("inactive");

  const response = await fetch(URL);
  const data = await response.json();
  if (response.ok) {
    newQuoteButton.textContent = "New Quote";
    newQuoteButton.classList.remove("inactive");
  } else {
    console.log("Error", data);
  }
};

newQuoteButton.addEventListener("click", fetchQuote);
