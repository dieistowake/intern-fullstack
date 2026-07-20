let gorevler = [];
let sonrakiId = 1;

const listeElement = document.querySelector("#gorev-listesi");
const bosMesajElement = document.querySelector("#bos-mesaj");

const listeyiEkranaCiz = () => {
  listeElement.innerHTML = "";

  if (gorevler.length === 0) {
    bosMesajElement.style.display = "block";
    return;
  }

  bosMesajElement.style.display = "none";

  gorevler.forEach((gorev) => {
    const li = document.createElement("li");

    const metinSpan = document.createElement("span");
    metinSpan.textContent = gorev.metin;
    if (gorev.tamamlandi) {
      metinSpan.classList.add("tamamlandi");
    }

    const tamamlaButon = document.createElement("button");
    tamamlaButon.textContent = "✓";
    tamamlaButon.classList.add("mini-buton", "tamamla-buton");
    tamamlaButon.dataset.id = gorev.id;

    const silButon = document.createElement("button");
    silButon.textContent = "✕";
    silButon.classList.add("mini-buton", "sil-buton");
    silButon.dataset.id = gorev.id;

    li.appendChild(metinSpan);
    li.appendChild(tamamlaButon);
    li.appendChild(silButon);
    listeElement.appendChild(li);
  });
}; // <-- Eksik olan kapanış süslü parantezi eklendi

listeyiEkranaCiz();

const gorevEkle = (metin) => {
  const yeniGorev = { id: sonrakiId, metin: metin, tamamlandi: false };
  gorevler.push(yeniGorev);
  sonrakiId = sonrakiId + 1;
  listeyiEkranaCiz();
};

const formElement = document.querySelector("#gorev-form");
const inputElement = document.querySelector("#gorev-input");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const girilenMetin = inputElement.value.trim();
  if (girilenMetin === "") return;

  gorevEkle(girilenMetin);
  inputElement.value = "";
});

const gorevTamamlaToggle = (id) => {
  gorevler = gorevler.map((gorev) =>
    gorev.id === id ? { ...gorev, tamamlandi: !gorev.tamamlandi } : gorev
  );
  listeyiEkranaCiz();
};

const gorevSil = (id) => {
  gorevler = gorevler.filter((gorev) => gorev.id !== id);
  listeyiEkranaCiz();
};

listeElement.addEventListener("click", (event) => {
  const tiklananId = Number(event.target.dataset.id);

  if (event.target.classList.contains("tamamla-buton")) {
    gorevTamamlaToggle(tiklananId);
  }
  if (event.target.classList.contains("sil-buton")) {
    gorevSil(tiklananId);
  }
});