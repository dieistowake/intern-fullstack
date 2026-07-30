import { StatusCard } from "./components/StatusCard";
import { TemperatureChart } from "./components/TemperatureChart";

export default function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>🔌 IoT Dashboard</h1>
      <StatusCard />
      <TemperatureChart />
    </main>
  );
}