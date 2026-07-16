const isim = "Mehmet";
console.log(isim);

const yas = 24;
console.log(yas);

const ogrenciMi = true;
console.log(ogrenciMi);

let sehir = "Ankara";
console.log(sehir);
sehir = "İstanbul";
console.log(sehir);

const ulke = "Türkiye";
console.log(ulke);

const a = 15;
const b = 25;
const toplam = a + b;
console.log(toplam);

const selamlama = "Merhaba" + " " + "Dünya";
console.log(selamlama);

const cumle = `Benim adım ${isim} ve ${yas} yaşındayım.`;
console.log(cumle);

console.log(typeof "Merhaba");
console.log(typeof 42);
console.log(typeof false);

const birlesim = 10 + "20"; 
console.log(birlesim);
console.log(typeof birlesim);

const meslek = "Yazılımcı";
const yasadigiSehir = "İstanbul";

const kimlikKarti = `
--- KİMLİK KARTI ---
İsim: ${isim}
Yaş: ${yas}
Meslek: ${meslek}
Şehir: ${yasadigiSehir}
--------------------
`;

console.log(kimlikKarti);
