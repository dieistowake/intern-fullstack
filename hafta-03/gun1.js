const sehir = "Sivas";
let sicaklik = 18;

console.log("Başlangıç Şehri:", sehir, "| Sıcaklık:", sicaklik, "°C");

sicaklik = 22;
console.log("Güncellenmiş Sıcaklık:", sicaklik, "°C");

const kitapListesi = ["Nutuk", "Devlet"];
console.log("İlk Kitap Listesi:", kitapListesi);

kitapListesi.push("Saatleri Ayarlama Enstitüsü");
console.log("Push Sonrası Kitap Listesi (const dizi değişti):", kitapListesi);

function kupAlNormal(sayi) {
  return sayi * sayi * sayi;
}

const kupAlCokSatirli = (sayi) => {
  const sonuc = sayi ** 3;
  return sonuc;
};

const kupAlKisa = (sayi) => sayi ** 3;

console.log("Normal Function ile 3'ün küpü:", kupAlNormal(3));
console.log("Çok Satırlı Arrow Function ile 3'ün küpü:", kupAlCokSatirli(3));
console.log("Tek Satırlık Arrow Function ile 3'ün küpü:", kupAlKisa(3));


const kisiAd = "Oğuz";
const okunanSayfa = 145;
const toplamSayfa = 300;

const okumaOzetMesaji = `Okur ${kisiAd}, kitabın ${okunanSayfa}. sayfasında. Kalan sayfa sayısı: ${toplamSayfa - okunanSayfa}.`;
console.log(okumaOzetMesaji);

const kursBilgisi = {
  baslik: "Modern JavaScript ve Asenkron Programlama",
  sureSaat: 40,
  seviye: "Orta",
  aktifMi: true
};

const { baslik, seviye } = kursBilgisi;
console.log("Nesneden çekilen alanlar -> Kurs:", baslik, "| Seviye:", seviye);

const diller = ["JavaScript", "Python", "Go", "Rust"];

const [birinciDil, ikinciDil] = diller;
console.log("Diziden çekilen elemanlar -> 1.:", birinciDil, "| 2.:", ikinciDil);