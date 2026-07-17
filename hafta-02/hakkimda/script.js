const temaButon = document.querySelector("#tema-buton");
const govde = document.querySelector("body");

temaButon.addEventListener("click", function () {
  govde.classList.toggle("koyu-tema");

  if (govde.classList.contains("koyu-tema")) {
    temaButon.textContent = "☀️ Aydınlık mod";
  } else {
    temaButon.textContent = "🌙 Karanlık mod";
  }
});