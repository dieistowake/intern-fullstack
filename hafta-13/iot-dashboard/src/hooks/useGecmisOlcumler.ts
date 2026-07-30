import { useEffect, useState } from "react";

export type Olcum = {
  temperature: number;
  humidity: number;
  createdAt: string;
};

export function useGecmisOlcumler(apiUrl: string) {
  const [veri, setVeri] = useState<Olcum[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/readings?range=24h`)
      .then((r) => r.json())
      .then((data: Olcum[]) => setVeri(data))
      .catch((e) => console.error("[Geçmiş Veri] Hata:", e));
  }, [apiUrl]);

  return veri;
}