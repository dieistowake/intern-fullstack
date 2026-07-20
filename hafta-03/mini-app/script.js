const alintiElement = document.querySelector("#alinti");
const yazarElement = document.querySelector("#yazar");
const buton = document.querySelector("#getir-buton");
const durumElement = document.querySelector("#durum");

const alintiGetir = async () => {
  buton.disabled = true;
  durumElement.textContent = "Yükleniyor...";

  try {
    const cevap = await fetch("https://api.quotable.io/random");

    if (!cevap.ok) {
      throw new Error(`İstek başarısız: ${cevap.status}`);
    }

    const veri = await cevap.json();

    alintiElement.textContent = veri.content;
    yazarElement.textContent = `— ${veri.author}`;
    durumElement.textContent = "";
  } catch (hata) {
    durumElement.textContent = "Alıntı getirilemedi, tekrar dene.";
    console.log("Hata detayı:", hata);
  } finally {
    buton.disabled = false;
  }
};

buton.addEventListener("click", alintiGetir);
alintiGetir();