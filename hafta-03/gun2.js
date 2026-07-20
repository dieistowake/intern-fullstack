const sayilar = [1, 3, 7, 15, 22, 47];

const ikiKati = sayilar.map((sayi) => sayi * 2);
console.log(ikiKati);

const kullanicilar = [
  { ad: "Mehmet", yas: 24 },
  { ad: "Can", yas: 30 },
  { ad: "Dilara", yas: 22 },
  { ad: "Cemal", yas: 18 },
  { ad: "Melek", yas: 28 },
];
const isimler = kullanicilar.map((kullanici) => kullanici.ad);
console.log(isimler);

const ciftler = sayilar.filter((sayi) => sayi % 2 === 0);
console.log(ciftler);

const yirmiUstu = kullanicilar.filter((kullanici) => kullanici.yas > 25);
console.log(yirmiUstu);

const can = kullanicilar.find((kullanici) => kullanici.ad === "Can");
console.log(can);

const yokAdli = kullanicilar.find((kullanici) => kullanici.ad === "Salih");
console.log(yokAdli);

const toplam = sayilar.reduce((birikenDeger, guncelDeger) => {
      return birikenDeger + guncelDeger;
}, 0);
console.log(toplam);

const sepet = [
  { urun: "elma", fiyat: 10 },
  { urun: "armut", fiyat: 12 },
  { urun: "karpuz", fiyat: 25 },
];

const toplamFiyat = sepet.reduce((toplam, oge) => toplam + oge.fiyat, 0);
console.log(toplamFiyat);

const sonuc = [1, 3, 7, 15, 22, 47]
  .filter((sayi) => sayi % 2 === 0)
  .map((sayi) => sayi * 2)
  .reduce((toplam, sayi) => toplam + sayi, 0);
console.log(sonuc);