const containerEl = document.querySelector(".i-name");

const displayText = [
  "Sabin Shrestha",
  "a React Developer",
  "an AI/ML Enthusiast",
];

let index = 0;
let subIndex = 0;

export default function autoText() {
  subIndex++;
  containerEl.innerHTML = `
 <div class="span-name">I'm ${displayText[index].slice(0, subIndex)}.</div>
`;
  if (subIndex === displayText[index].length) {
    index++;
    subIndex = 0;
  }

  if (index === displayText.length) {
    index = 0;
  }
  setTimeout(autoText, 200);
}
