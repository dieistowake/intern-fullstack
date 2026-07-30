import { useEffect, useState } from "react";

export type Olcum = {
  deviceId: string;
  temperature: number;
  humidity: number;
  createdAt: string;
};

export function useCanliOlcum(wsUrl: string) {
  const [sonOlcum, setSonOlcum] = useState<Olcum | null>(null);
  const [bagli, setBagli] = useState<boolean>(false);

  useEffect(() => {
    const socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      console.log("[WebSocket] Bağlantı sağlandı.");
      setBagli(true);
    };

    socket.onclose = () => {
      console.log("[WebSocket] Bağlantı kapandı.");
      setBagli(false);
    };

    socket.onerror = (error) => {
      console.error("[WebSocket] Bağlantı hatası:", error);
      setBagli(false);
    };

    socket.onmessage = (event) => {
      try {
        const veri: Olcum = JSON.parse(event.data);
        setSonOlcum(veri);
      } catch (err) {
        console.error("[WebSocket] Veri ayrıştırma hatası:", err);
      }
    };

    // Cleanup: Bileşen unmount olduğunda veya wsUrl değiştiğinde soketi kapat
    return () => {
      socket.close();
    };
  }, [wsUrl]);

  return { sonOlcum, bagli };
}