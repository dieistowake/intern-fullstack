const alintiElement = document.querySelector("#alinti");
const buton = document.querySelector("#getir-buton");
const durumElement = document.querySelector("#durum");

const alintiGetir = async () => {
  buton.disabled = true;
  durumElement.textContent = "Yükleniyor...";

  try {
    const cevap = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!cevap.ok) {
      throw new Error(`İstek başarısız: ${cevap.status}`);
    }

    const veri = await cevap.json();

    alintiElement.src = veri.message;
    durumElement.textContent = "";
  } catch (hata) {
    durumElement.textContent = "Fotoğraf getirilemedi, tekrar dene.";
    console.log("Hata detayı:", hata);
  } finally {
    buton.disabled = false;
  }
};

buton.addEventListener("click", alintiGetir);
alintiGetir();