import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const fetchGreet = async () => {
    const res = await fetch("/api/greet");
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div>
      <h1>React + Express Test</h1>
      <button onClick={fetchGreet}>Get Greet</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;
