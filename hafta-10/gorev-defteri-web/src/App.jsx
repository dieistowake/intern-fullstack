import { useState, useEffect } from 'react'
import { girisYap, gorevleriGetir, gorevEkle } from './api'
import './App.css'

function GorevEkleForm({ onEklendi }) {
  const [baslik, setBaslik] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!baslik.trim()) return;
    try {
      const yeniGorev = await gorevEkle(baslik);
      onEklendi(yeniGorev);
      setBaslik("");
    } catch (hata) {
      console.error("Görev ekleme hatası:", hata);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gorev-ekle-form">
      <input 
        value={baslik} 
        onChange={(e) => setBaslik(e.target.value)} 
        placeholder="yeni görev..." 
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

function App() {
  const [email, setEmail] = useState('')
  const [sifre, setSifre] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [gorevler, setGorevler] = useState([])
  const [yukleniyor, setYukleniyor] = useState(false)
  const [hataMesaji, setHataMesaji] = useState('')

  useEffect(() => {
    if (!token) return

    const yukleGorevler = async () => {
      setYukleniyor(true)
      try {
        const liste = await gorevleriGetir()
        setGorevler(liste)
      } catch (hata) {
        console.error('Görevler çekilirken hata oluştu:', hata)
      } finally {
        setYukleniyor(false)
      }
    }

    yukleGorevler()
  }, [token])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setHataMesaji('')

    try {
      const veri = await girisYap(email, sifre)
      if (veri.token) {
        localStorage.setItem('token', veri.token)
        setToken(veri.token)
      }
    } catch (hata) {
      console.error('Giriş hatası:', hata)
      setHataMesaji('Giriş başarısız — email veya şifreni kontrol et.')
    }
  }

  const handleYeniGorev = (yeniGorev) => {
    setGorevler((oncekiler) => [...oncekiler, yeniGorev]);
  }

  return (
    <div className="container">
      {!token ? (
        <div className="login-container">
          <h2>Giriş Yap</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="sifre">Şifre:</label>
              <input
                id="sifre"
                type="password"
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
                required
              />
            </div>

            <button type="submit">Giriş Yap</button>
          </form>
          {hataMesaji && <p className="hata-mesaji" style={{ color: 'red' }}>{hataMesaji}</p>}
        </div>
      ) : (
        <div className="gorevler-container">
          <h2>Görevlerim</h2>
          <GorevEkleForm onEklendi={handleYeniGorev} />
          {yukleniyor ? (
            <p>Yükleniyor...</p>
          ) : (
            <ul>
              {gorevler.map((gorev) => (
                <li key={gorev.id}>
                  <span style={{ textDecoration: gorev.tamamlandi ? 'line-through' : 'none' }}>
                    {gorev.baslik}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default App