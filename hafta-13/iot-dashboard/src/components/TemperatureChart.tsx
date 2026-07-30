import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGecmisOlcumler } from "../hooks/useGecmisOlcumler";

// Sabit URL yerine Vercel/yerel ortam değişkeni kullanılıyor
const API_URL = import.meta.env.VITE_API_URL;

export function TemperatureChart() {
  const veri = useGecmisOlcumler(API_URL);

  if (veri.length === 0) {
    return <p style={styles.noData}>Grafik için henüz yeterli veri yok.</p>;
  }

  const sicakliklar = veri.map((v) => v.temperature);
  const min = Math.min(...sicakliklar);
  const max = Math.max(...sicakliklar);

  return (
    <div className="grafik-kutusu" style={styles.container}>
      <p style={styles.stats}>
        Son 24 saat · min <strong>{min.toFixed(1)}°C</strong> · maks{" "}
        <strong>{max.toFixed(1)}°C</strong>
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={veri}>
          <XAxis
            dataKey="createdAt"
            tickFormatter={(t: string) =>
              new Date(t).toLocaleTimeString("tr-TR", {
                hour: "2-digit",
                minute: "2-digit",
              })
            }
          />
          <YAxis domain={["auto", "auto"]} unit="°C" />
          <Tooltip
            labelFormatter={(label) =>
              new Date(label as string).toLocaleString("tr-TR")
            }
            formatter={(value) => [`${Number(value).toFixed(1)}°C`, "Sıcaklık"]}
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#e67e22"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const styles = {
  container: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "16px",
    marginTop: "20px",
    maxWidth: "600px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  stats: {
    marginBottom: "16px",
    fontSize: "14px",
    color: "#34495e",
  },
  noData: {
    marginTop: "20px",
    color: "#7f8c8d",
    fontSize: "14px",
  },
};