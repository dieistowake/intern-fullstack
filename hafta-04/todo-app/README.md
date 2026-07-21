# Görev Yöneticisi (To-Do App)

Tarayıcı üzerinde çalışan, modern JavaScript (ES6+) kullanılarak geliştirilmiş, yerel depolama destekli bir görev yönetim uygulaması. 

## Proje Hakkında
Bu proje, günlük yapılacak işlerinizi ekleyebileceğiniz, durumlarını takip edebileceğiniz ve yönetebileceğiniz yalın bir web uygulamasıdır. Kullanıcıların girdiği veriler tarayıcının yerel hafızasına (localStorage) kaydedilir; böylece sayfa yenilense veya tarayıcı kapatılsa bile görevler kaybolmaz.

## Temel Özellikler
*   **Görev Ekleme:** Boş girişleri ve aynı görevlerin tekrar eklenmesini engelleyen akıllı form yapısı.
*   **Görev Durumu:** Eklenen görevleri tek tıkla "tamamlandı" olarak işaretleme veya iptal etme.
*   **Görev Silme:** İhtiyaç duyulmayan veya biten görevleri listeden tamamen çıkarma.
*   **Kalıcı Veri (Local Storage):** Uygulama verileri tarayıcınızda tutulur, veri kaybı yaşanmaz.
*   **Kullanıcı Dostu Arayüz:** CSS Flexbox ve temiz tasarım kuralları kullanılarak oluşturulmuş, etkileşimli geri bildirim (hover, alert) sunan arayüz.

## Kullanılan Teknolojiler
Uygulama herhangi bir dış kütüphane veya framework kullanılmadan "Vanilla" web teknolojileri ile geliştirilmiştir:
*   **HTML5:** Anlamsal yapının (semantic structure) kurulması (Form, liste ve buton elementleri).
*   **CSS3:** Flexbox tabanlı düzen (layout), görsel hiyerarşi ve interaktif buton tasarımları.
*   **JavaScript (ES6):**
    *   DOM Manipülasyonu (`createElement`, `appendChild`)
    *   Olay Dinleyicileri (Event Delegation)
    *   Dizi Metotları (`map`, `filter`, `some`, `forEach`)
    *   Tarayıcı Depolama (`localStorage`, `JSON.parse`/`JSON.stringify`)

## Nasıl Çalıştırılır?
Uygulamayı çalıştırmak için herhangi bir paket yöneticisine (npm, yarn vb.) veya sunucu kurulumuna ihtiyacınız yoktur.

1.  Proje dosyalarını bilgisayarınıza indirin.
2.  `index.html` dosyasına çift tıklayarak modern bir web tarayıcısında (Chrome, Firefox, Safari vb.) açın.
3.  Uygulama kullanıma hazırdır!

## Canlı Önizleme
*(https://intern-todo-app.vercel.app/)*