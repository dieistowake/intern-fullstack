import { Routes, Route, Link } from 'react-router-dom'
import AnaSayfa from './pages/AnaSayfa.tsx'
import KitapDetay from './pages/KitapDetay.tsx'

function App() {
  return (
    <div>
      <nav><Link to="/">Ana Sayfa</Link></nav>
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/kitap/:id" element={<KitapDetay />} />
      </Routes>
    </div>
  )
}
export default App