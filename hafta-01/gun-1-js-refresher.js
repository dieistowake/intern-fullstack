function ciftSayilarToplami(sayilar) {
  return sayilar.reduce((toplam, sayi) => {
    if (sayi % 2 === 0) {
      return toplam + sayi;
    }
    return toplam;
  }, 0);
}

console.log(ciftSayilarToplami([1, 2, 3, 4, 5, 6])); 
// Çıktı: 12

const kisiler = [  
  { isim: "Ali", yas: 17 },  
  { isim: "Ayşe", yas: 22 },  
  { isim: "Mehmet", yas: 15 },
];

const yetiskinIsimleri = kisiler
  .filter(({ yas }) => yas >= 18)
  .map(({ isim }) => isim);

console.log(yetiskinIsimleri); 
// Çıktı: ["Ayşe"]
// TODO: sadece 18 yaş ve üstü olan kişilerin isimlerini içeren bir dizi üret
// beklenen çıktı: ["Ayşe"]