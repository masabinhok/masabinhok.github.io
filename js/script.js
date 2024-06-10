const sendButton = document.querySelector(".js-send-button");
sendButton.addEventListener("click", () => {
  sendButton.innerHTML = `Sent`;
  console.log(sendButton.innerHTML);
});


