let allChars = [];
let passwordsLength = 8;
let showEl1 = document.getElementById("show1-el");
let showEl2 = document.getElementById("show2-el");
let showEl3 = document.getElementById("show3-el");
let showEl4 = document.getElementById("show4-el");
let copyToClipboardEvent = document.getElementById("copyToClipboard");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  passwordsLength = inputEl.value;
});

for (let i = 32; i < 127; i++) {
  allChars.push(String.fromCharCode(i));
}

function randomPassword() {
  let passwords = [];
  for (let k = 0; k < passwordsLength; k++) {
    passwords += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return passwords;
}
function passwordGeneratorOnClickEventHandler() {
  showEl1.textContent = randomPassword();
  showEl2.textContent = randomPassword();
  showEl3.textContent = randomPassword();
  showEl4.textContent = randomPassword();
  copyToClipboardEvent.textContent = "";
}

function copyToClipboard(id) {
  let targetBtn = document.getElementById(id);
  navigator.clipboard.writeText(targetBtn.textContent);
  copyToClipboardEvent.textContent = "Password Coppied";
}
