import { useCanliOlcum } from "../hooks/useCanliOlcum";

// Wokwi kartı doğrudan Railway'e POST attığı için canlı wss:// adresini dinliyoruz
const WS_URL = "wss://gorev-defteri-api-production.up.railway.app";

export function StatusCard() {
  const { sonOlcum, bagli } = useCanliOlcum(WS_URL);

  return (
    <div className="status-card" style={styles.card}>
      <div className="header" style={styles.header}>
        <span
          style={{
            ...styles.dot,
            backgroundColor: bagli ? "#2ecc71" : "#95a5a6",
          }}
        />
        <span style={styles.statusText}>
          {bagli ? "Canlı Bağlantı" : "Bağlanıyor..."}
        </span>
      </div>

      {sonOlcum ? (
        <div className="content" style={styles.content}>
          <h2 style={styles.temp}>{sonOlcum.temperature.toFixed(1)}°C</h2>
          <p style={styles.humidity}>%{sonOlcum.humidity.toFixed(0)} Nem</p>
          <small style={styles.device}>Cihaz: {sonOlcum.deviceId}</small>
        </div>
      ) : (
        <p style={styles.noData}>
          Henüz ölçüm gelmedi, kartın çalıştığından emin ol.
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    display: "inline-block",
  },
  statusText: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
  temp: {
    margin: 0,
    fontSize: "2rem",
    color: "#e67e22",
  },
  humidity: {
    margin: 0,
    fontSize: "1.1rem",
    color: "#3498db",
  },
  device: {
    color: "#7f8c8d",
    marginTop: "8px",
  },
  noData: {
    color: "#7f8c8d",
    fontSize: "14px",
  },
};