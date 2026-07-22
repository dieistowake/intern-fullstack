import { useState } from 'react'
import { Link } from 'react-router-dom'

function AnaSayfa() {
  const [sorgu, setSorgu] = useState('')                    // string'e infer edildi, sorun yok
  const [sonuclar, setSonuclar] = useState<any[]>([])        // boş dizi -> TS tipi bilemez, SEN söyledin
  const [yukleniyor, setYukleniyor] = useState(false)        // boolean'a infer edildi, sorun yok
  const [hata, setHata] = useState<string | null>(null)      // null ile başlıyor ama sonra string de olacak

  const aramaYap = async (e: React.FormEvent<HTMLFormElement>) => {  // form submit event tipi
    e.preventDefault()
    if (sorgu.trim() === '') return

    setYukleniyor(true)
    setHata(null)
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(sorgu)}&limit=12`
      )
      if (!res.ok) throw new Error('Arama başarısız oldu')
      const veri = await res.json()
      setSonuclar(veri.docs)
    } catch (err: any) {                                     // Gün 3'te bunu 'unknown' yapacağız
      setHata(err.message)
    } finally {
      setYukleniyor(false)
    }
  }

  return (
    <div>
      <form onSubmit={aramaYap}>
        <input
          value={sorgu}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSorgu(e.target.value)}  // input event tipi
          placeholder="Kitap adı yaz..."
        />
        <button type="submit">Ara</button>
      </form>

      {yukleniyor && <p>Aranıyor...</p>}
      {hata && <p className="hata">{hata}</p>}
      {!yukleniyor && !hata && sonuclar.length === 0 && <p>Bir kitap ara.</p>}

      <ul className="sonuc-listesi">
        {sonuclar.map((kitap) => (          // kitap burada 'any' -- sonuclar 'any[]' olduğu için, Gün 3'te düzelecek
          <li key={kitap.key}>
            <Link to={`/kitap/${kitap.key.replace('/works/', '')}`}>
              {kitap.title} {kitap.author_name ? `— ${kitap.author_name[0]}` : ''}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnaSayfa