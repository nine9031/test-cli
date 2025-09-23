import React, { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("");

  const playMinigame = () => {
    // สุ่มเลขแบบถ่วงน้ำหนัก (ทำให้เลขใหญ่ยากขึ้น)
    const randomNum = Math.floor(Math.pow(Math.random(), 3) * 1000000) + 1;
    // ^ ยกกำลัง 3 = ยิ่งไปทางเลขเล็กมากกว่า เลขใหญ่โอกาสน้อย

    setCurrentNumber(randomNum);

    if (randomNum > highScore) {
      setHighScore(randomNum);
      setMessage("🎉 คุณทำลายสถิติ!");
    } else {
      setMessage("ยังไม่ทำลายสถิติ ลองอีกครั้ง 🔁");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>สุ่มเลขทำลายสถิติ 🎮</h1>

      <button
        onClick={playMinigame}
        style={{
          background: "#e67e22",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        สุ่มเลข
      </button>

      {currentNumber !== null && (
        <div style={{ marginTop: "20px", fontSize: "20px" }}>
          <p>
            คุณสุ่มได้เลข: <b>{currentNumber.toLocaleString()}</b>
          </p>
          <p>
            สถิติสูงสุด: <b>{highScore.toLocaleString()}</b>
          </p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
