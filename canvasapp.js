import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<img src={viteLogo} className="logo" alt="Vite logo" />

				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
			<h1>Vite + React</h1>
			<p>˚
				powered by <strong>codedamn</strong>
			</p>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>

				<p>
					running on port{" "}
					<strong>{import.meta.env.VITE_PUBLIC_PORT}</strong>
				</p>
			</div>
		</>
	);
}

export default App;
