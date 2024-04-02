import analyzer from './analyzer.js';

// Obtener referencia al botón y al textarea
const resetButton = document.getElementById("reset-button");
const text = document.querySelector('textarea[name="user-input"]');

// Obtener referencias a los elementos li para mostrar las métricas
const wordCountDisplay = document.querySelector("li[data-testid='word-count']");
const characterCount = document.querySelector("li[data-testid='character-count']");
const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");
const numberCount = document.querySelector("li[data-testid='number-count']");
const numberSum = document.querySelector("li[data-testid='number-sum']");
const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']");

// Función para actualizar las métricas
function updateMetrics() {
  wordCountDisplay.innerHTML = "Palabras: " + analyzer.getWordCount(text.value);
  characterCount.innerHTML = "Caracteres: " + analyzer.getCharacterCount(text.value);
  characterNoSpacesCount.innerHTML = "Caracteres Sin Espacios: " + analyzer.getCharacterCountExcludingSpaces(text.value);
  numberCount.innerHTML = "Números: " + analyzer.getNumberCount(text.value);
  numberSum.innerHTML = "Suma de Números: " + analyzer.getNumberSum(text.value);
  wordLengthAverage.innerHTML = "Media: " + analyzer.getAverageWordLength(text.value);
}

// Escuchar evento input en el textarea
text.addEventListener("input", updateMetrics);

// Escuchar evento click en el botón de reinicio
resetButton.addEventListener("click", () => {
  text.value = ""; // Limpiar el contenido del textarea
  updateMetrics(); // Actualizar las métricas
});