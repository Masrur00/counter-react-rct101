import { Counter } from "./components/Counter";
import "./styles.css";

export default function App() {
  const initCount = 1000;
  return (
    <div className="App">
      <Counter initCount={initCount} />
    </div>
  );
}
