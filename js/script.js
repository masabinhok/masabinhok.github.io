export default function heart() {
  const bodyEl = document.querySelector("body");
  const heartPool = [];
  const poolSize = 20;

  for (let i = 0; i < poolSize; i++) {
    const spanEl = document.createElement("span");
    spanEl.classList.add("heart");
    spanEl.innerHTML = "❤";
    bodyEl.appendChild(spanEl);
    heartPool.push(spanEl);

    spanEl.addEventListener("animationend", () => {
      spanEl.style.display = "none";
    });
  }

  let currentHeart = 0;

  bodyEl.addEventListener("mousemove", (event) => {
    const { pageX, pageY } = event; // Use pageX and pageY instead of clientX and clientY
    const heartEl = heartPool[currentHeart];

    const size = Math.random() * 20 + 10; // Ensure a minimum size of 10px
    heartEl.style.fontSize = `${size}px`;
    heartEl.style.fontSize = `${size}px`;

    heartEl.style.left = `${pageX - size / 2}px`;
    heartEl.style.top = `${pageY - size / 2}px`;

    heartEl.style.display = "inline-block";

    // Reset and restart the animation
    heartEl.style.animation = "none";
    heartEl.offsetHeight; // Trigger reflow
    heartEl.style.animation = "heart 2s linear";

    currentHeart = (currentHeart + 1) % poolSize;
  });
}
