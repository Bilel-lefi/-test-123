import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          background: "#f0f4f8",
          padding: "40px",
          marginTop: "50px",
          borderRadius: "15px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2c3e50",
            marginBottom: "30px",
          }}
        >
          💐 Remerciements
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#34495e" }}>
          Je tiens à exprimer ma plus sincère gratitude à{" "}
          <strong>Madame Fatiha Naouer</strong> mon encadrante pour son
          soutien inestimable ses conseils avisés et son accompagnement
          bienveillant tout au long de ce projet .
        </p>
        {/* <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#34495e",
            marginTop: "20px",
          }}
        >
          Je remercie également les membres du <strong>jury</strong> pour
          l'intérêt porté à mon travail et pour leurs remarques pertinentes qui
          m'ont permis de progresser.
        </p> */}
        <div
          style={{
            textAlign: "right",
            marginTop: "40px",
            fontStyle: "italic",
            color: "#7f8c8d",
          }}
        >
          — Bilel Lefi
        </div>
      </div>
    </>
  );
}

export default App;
