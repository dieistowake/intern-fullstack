import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function KitapDetay() {
  const { id } = useParams<{ id: string }>()
  const [kitap, setKitap] = useState<any>(null)
  const [yukleniyor, setYukleniyor] = useState<boolean>(true)
  const [hata, setHata] = useState<string | null>(null)

  useEffect(() => {
    async function detayGetir() {
      setYukleniyor(true)
      setHata(null)
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`)
        if (!res.ok) throw new Error('Kitap detayları alınamadı: ' + res.status)
        const veri = await res.json()
        setKitap(veri)
      } catch (err: any) {
        setHata(err.message)
      } finally {
        setYukleniyor(false)
      }
    }

    if (id) {
      detayGetir()
    }
  }, [id])

  if (yukleniyor) return <p>Yükleniyor...</p>
  if (hata) return <p className="hata">Hata: {hata}</p>
  if (!kitap) return <p>Kitap bulunamadı.</p>

  return (
    <div>
      <Link to="/">← Ana Sayfaya Dön</Link>
      <h2>{kitap.title}</h2>
      {kitap.description && (
        <p>
          {typeof kitap.description === 'string'
            ? kitap.description
            : kitap.description.value}
        </p>
      )}
    </div>
  )
}

export default KitapDetay