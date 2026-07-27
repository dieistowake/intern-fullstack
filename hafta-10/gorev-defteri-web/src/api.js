const API_URL = import.meta.env.VITE_API_URL;

export async function girisYap(email, sifre) {
  const cevap = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, sifre }),
  });

  if (!cevap.ok) {
    throw new Error("Giriş başarısız");
  }
  return cevap.json();
}
  export async function gorevleriGetir() {
  const token = localStorage.getItem("token");

  const cevap = await fetch(`${API_URL}/gorevlerim`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!cevap.ok) throw new Error("Görevler alınamadı");
  return cevap.json();
}
export async function gorevEkle(baslik) {
  const token = localStorage.getItem("token");
  const cevap = await fetch(`${API_URL}/gorevler`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ baslik }),
  });
  if (!cevap.ok) throw new Error("Görev eklenemedi");
  return cevap.json();
}
