import { durumHesapla } from "../lib/esikler";

type Props = {
  temperature: number;
  humidity: number;
};

export function StatusBadge({ temperature, humidity }: Props) {
  const durum = durumHesapla(temperature, humidity);

  const isUyari = durum === "uyari";

  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
        backgroundColor: isUyari ? "#ffeaa7" : "#d4edda",
        color: isUyari ? "#d63031" : "#155724",
        border: `1px solid ${isUyari ? "#ff7675" : "#c3e6cb"}`,
      }}
    >
      {isUyari ? "⚠️ Dikkat" : "✅ Normal"}
    </span>
  );
}