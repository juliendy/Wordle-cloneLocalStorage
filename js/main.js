document.addEventListener("DOMContentLoaded", () => {
  // also in local storage
  let currentWordIndex = 0;
  let guessedWordCount = 0;
  let availableSpace = 1;
  let guessedWords = [[]];

  const words = ["sweet", "onion", "shoes", "heavy", "couch"];
  let currentWord = words[currentWordIndex];

  initLocalStorage();
  initHelpModal();
  initStatsModal();
  createSquares();
  addKeyboardClicks();
  loadLocalStorage();

  function initLocalStorage() {
    const storedCurrentWordIndex =
      window.localStorage.getItem("currentWordIndex");
    if (!storedCurrentWordIndex) {
      window.localStorage.setItem("currentWordIndex", currentWordIndex);
    } else {
      currentWordIndex = Number(storedCurrentWordIndex);
      currentWord = words[currentWordIndex];
    }
  }
