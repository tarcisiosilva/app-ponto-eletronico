import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [pontos, setPontos] = useState([]);
  const name = localStorage.getItem("name");
  const [error, setError] = useState("");
  const token = localStorage.getItem("authToken");
  console.log(name);
  console.log(token);
  const navigate = useNavigate();

  const registrarPonto = () => {
    const agora = new Date().toLocaleString();
    setPontos((prev) => [...prev, agora]);
  };

  const confirmarPonto = () => {
    try{
      const user_id = localStorage.getItem("user_id");
      const response =  axios.post("http://localhost:8000/api/pointRegister", {
        user_id},
        {
        headers: { Authorization: `Bearer ${token}` }, 
      });
    }catch(error){
      setError("Erro ao registrar ponto");
    }
  };

  const Details = () => {
      navigate("/profile");
  };

  return (
    
    <div style={styles.container}>

    <div> <button onClick={Details}>Perfil</button></div>

    <h1 style={styles.title}>Bem-vindo, {name}!</h1>
    <div style={styles.card}>
      <h2 style={styles.subtitle}>Pontos Registrados</h2>
      <ul>
        {pontos.map((ponto, index) => (
          <li key={index}>{ponto} <button onClick={confirmarPonto}>Confirmar</button></li>
        ))}
      </ul>
      <h2>Seus Pontos Registrados:</h2>
      <ul>
        {pontos.map((ponto, index) => (
          <li key={index}>{ponto}</li>
        ))}
      </ul>
      <button onClick={registrarPonto}>Registrar Ponto</button>
    </div>


    </div>
  );
};

  

const styles = {
container: {
  textAlign: "center",
  marginTop: "50px",
  fontFamily: "'Arial', sans-serif",
  color: "#333",
},
title: {
  fontSize: "28px",
  marginBottom: "20px",
},
card: {
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  margin: "0 auto 20px auto",
},
subtitle: {
  fontSize: "22px",
  marginBottom: "15px",
  color: "#555",
},
list: {
  listStyle: "none",
  padding: 0,
  margin: 0,
},
listItem: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "1px solid #ddd",
},
confirmButton: {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
},
confirmado: {
  backgroundColor: "#4caf50",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "12px",
  fontSize: "12px",
},
registerButton: {
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
},
emptyMessage: {
  color: "#888",
  fontStyle: "italic",
},
};




export default Dashboard;
