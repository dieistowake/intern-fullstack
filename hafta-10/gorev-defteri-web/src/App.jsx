import { useState } from 'react'
import { girisYap } from './api'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [sifre, setSifre] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const veri = await girisYap(email, sifre)
      if (veri.token) {
        localStorage.setItem('token', veri.token)
      }
    } catch (hata) {
      console.error('Giriş hatası:', hata)
    }
  }

  return (
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
    </div>
  )
}

export default App