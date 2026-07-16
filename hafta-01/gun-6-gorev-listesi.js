const gorevler = [];

function gorevEkle(baslik) {
  const yeniGorev = {
    baslik: baslik,
    tamamlandi: false,
  };
  gorevler.push(yeniGorev);
  console.log(`Eklendi: ${baslik}`);
}

function gorevleriListele() {
  console.log("\n--- GÖREV LİSTESİ ---");
  if (gorevler.length === 0) {
    console.log("Henüz bir görev eklenmemiş.");
    return;
  }
  gorevler.forEach((gorev, indeks) => {
    const durumIsareti = gorev.tamamlandi ? "[x]" : "[ ]";
    const siraNo = indeks + 1;
    console.log(`${siraNo}. ${durumIsareti} ${gorev.baslik}`);
  });
}

function gorevTamamla(sira) {
  const indeks = sira - 1;
  if (indeks >= 0 && indeks < gorevler.length) {
    gorevler[indeks].tamamlandi = true;
    console.log(`\n✔ Görev ${sira} tamamlandı olarak işaretlendi.`);
  } else {
    console.log(`\n⚠ Geçersiz sıra numarası: ${sira}`);
  }
}

function tamamlananSayisi() {
  let sayac = 0;
  for (let i = 0; i < gorevler.length; i++) {
    if (gorevler[i].tamamlandi) {
      sayac++;
    }
  }
  return sayac;
}

gorevEkle("JavaScript çalış");
gorevEkle("Kitap oku");
gorevEkle("Yürüyüş yap");

gorevleriListele();
gorevTamamla(1);
gorevleriListele();

console.log(`\nToplam tamamlanan görev sayısı: ${tamamlananSayisi()}`);