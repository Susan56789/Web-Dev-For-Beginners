const quotes = [
  `I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later.`,
  "Gentlemen, you can't fight in here. This is the war room.",
  `My mother always used to say: The older you get, the better you get, unless you’re a banana.`,
  `Clothes make the man. Naked people have little or no influence in society.`,
  "I want my children to have all the things I couldn't afford. Then I want to move in with them.",
  `Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.`,
  `I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off.`,
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById("quote");
const messageElement = document.getElementById("message");
const typedValueElement = document.getElementById("typed-value");

document.getElementById("start").addEventListener("click", () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(" ");
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function (word) {
    return `<span>${word} </span>`;
  });
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join("");

  // Highlight the first word
  quoteElement.childNodes[0].className = "highlight";

  // Clear any prior messages
  messageElement.innerText = "";

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = "";
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});

typedValueElement.addEventListener("input", () => {
  // Get the current word
  const currentWord = words[wordIndex];

  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${
      elapsedTime / 1000
    } seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = "";
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = "";
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = "highlight";
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = "";
  } else {
    // error state
    typedValueElement.className = "error";
  }
});
