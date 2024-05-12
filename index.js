import { romarioStyle, buttonStyle, buttonText } from "./styls.js";
import { eventBunton } from "./randomColor.js"; // Importe a função evenete





// Crie o elemento romario
const romario = document.createElement("div");
Object.assign(romario.style, romarioStyle);
document.body.appendChild(romario);




const roma = document.createElement("span");
roma.textContent = "Olá mundo";
romario.appendChild(roma);



const button = document.createElement("button");
Object.assign(button.style, buttonStyle);
button.textContent = buttonText.textContent;
romario.appendChild(button);

eventBunton (button); // Chame a função evenete passando o botão como argumento
