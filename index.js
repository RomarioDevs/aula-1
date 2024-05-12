import { romarioStyle, buttonStyle, buttonText } from "./styls.js";
import { evenete } from "./randomColor.js"; // Importe a função evenete

// Crie o elemento romario
const romario = document.createElement("div");

// Aplique o estilo ao elemento romario
Object.assign(romario.style, romarioStyle);

// Adicione o elemento romario ao corpo do documento
document.body.appendChild(romario);

// Crie os outros elementos e adicione-os a romario...

const roma = document.createElement("span");
roma.textContent = "Olá mundo";
romario.appendChild(roma);

const button = document.createElement("button");
Object.assign(button.style, buttonStyle);

button.textContent = buttonText.textContent;

romario.appendChild(button);

evenete(button); // Chame a função evenete passando o botão como argumento
