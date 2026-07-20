console.log("1. mesaj");
console.log("2. mesaj");
console.log("3. mesaj");

console.log("Önce bu");

setTimeout(() => {
  console.log("Sonraki gelecek mesaj bu");
}, 2000);

console.log("Ama bu mesaj, önce çıkacak");

const sozVer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const basariliMi = true;
    if (basariliMi) {
      resolve("Veri geldi");
    } else {
      reject("Bir hata oldu");
    }
  }, 1000);
});

sozVer
  .then((sonuc) => {
    console.log("Başarılı:", sonuc);
  })
  .catch((hata) => {
    console.log("Hata:", hata);
  });