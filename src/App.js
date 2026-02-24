import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = name ? `Hello, ${name}!` : `Clicks: ${count}`;
    return () => {
      document.title = "React App";
    };
  }, [name, count]);

  return (
    <div className="container">
      <h1>React Hooks Demo</h1>
      <hr className="divider" />

      <section className="section">
        <h3>1. UseState (Input)</h3>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="output-text">
          {name ? `Hello, ${name}!` : "Please enter a name above."}
        </p>
      </section>

      <section className="section">
        <h3>2. UseState (Counter)</h3>
        <button onClick={() => setCount(count + 1)} className="btn-primary">
          Click Me
        </button>
        <p className="output-text">
          You clicked <strong>{count}</strong> times!
        </p>
      </section>

      <section className="info-box">
        <small>💡 Check your browser tab title!</small>
      </section>
    </div>
  );
}
