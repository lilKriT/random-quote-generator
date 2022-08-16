const URL = "http://api.quotable.io/random;";

const newQuoteButton = document.querySelector("button#new-quote");

const fetchQuote = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

newQuoteButton.addEventListener("click", fetchQuote);
