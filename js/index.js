import heart from "./heart.js";
import autoText from "./auto-text.js";

heart();
autoText();

const imageContainerEl = document.querySelector(".image-container");
let value = 0;


setInterval(() => {
  value -= 40;
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${value}deg)`;
},3000);


