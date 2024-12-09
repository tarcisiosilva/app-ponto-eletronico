import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      const token = response.data.access_token;
      const me = response.data.user;
      const rules = response.data.rules;

      console.log(response.data);
      console.log(token);

      // Salvar o token no localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("name", me.name);
      localStorage.setItem("user_id", me.id);
      

      // Decodificar o payload para determinar o redirecionamento
      //const payload = JSON.parse(atob(token.access_token.split(".")[1])); // Decodificação simples do JWT
      
      if (rules == 1) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Credenciais inválidas");
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <h1 style={styles.heading}>Login</h1>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Entrar
          </button>
        </form>
        <p style={styles.forgotPassword}>Esqueceu a senha?</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6e7e85, #3a4f54)",
    fontFamily: "Arial, sans-serif",
  },
  loginCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
  error: {
    color: "#f44336",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    textAlign: "left",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#333",
  },
  input: {
    padding: "12px",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    marginBottom: "10px",
    outline: "none",
    transition: "border 0.3s ease",
  },
  input: {
    padding: "12px",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    marginBottom: "10px",
    outline: "none",
    transition: "border 0.3s ease",
  },
  inputFocus: {
    borderColor: "#007bff",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#0056b3",
  },
  forgotPassword: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#007bff",
    cursor: "pointer",
  },
};
export default Login;
