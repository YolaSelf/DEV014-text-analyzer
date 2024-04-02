// analyzer.js
const analyzer = {
  getWordCount: (text) => {
    const wordArray = text.trim().split(" "); // Separar palabras por espacios
    return wordArray.length;
  },
  getCharacterCount: (text) => {
    return text.length; // Longitud total de la cadena
  },
  getCharacterCountExcludingSpaces: (text) => {
    let characterCount = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char !== " " && !isPunctuation(char)) { // Excluir espacios y signos de puntuación
        characterCount++;
      }
    }
    return characterCount;
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(" ").filter(word => word !== "");
    const totalWords = words.length;
    const totalCharacters = words.reduce((acc, word) => acc + word.length, 0);
    const numberFixed =  (totalCharacters / totalWords).toFixed(2);
    return  parseFloat(numberFixed)
  },

  getNumberCount: (text) => {
    const wordArray = text.trim().split(" ");
    let numberCount = 0;
    for (let i = 0; i < wordArray.length; i++) {
      if (!isNaN(wordArray[i])) {
        numberCount++;
      }
    }
    return numberCount;
  },

  getNumberSum: (text) => {
    const wordArray = text.trim().split(" ");
    let sum = 0;
    for (let i = 0; i < wordArray.length; i++) {
      if (!isNaN(wordArray[i])) {
        sum += parseInt(wordArray[i]);
      }
    }
    return sum;
  },
}

function isPunctuation(char) {
  const punctuationMarks = [".", ",", "!", "?", ";", ":", "-", "'", "\""];
  return punctuationMarks.includes(char);
}

export default analyzer;
