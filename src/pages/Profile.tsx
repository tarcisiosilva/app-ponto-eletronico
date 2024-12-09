import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "(11) 91234-5678",
    address: "Rua Exemplo, 123, São Paulo, SP",
  });

  const [editData, setEditData] = useState(profileData);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setProfileData(editData); // Salva as alterações
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meu Perfil</h1>
      <div style={styles.card}>
        {isEditing ? (
          <form style={styles.form}>
            <label style={styles.label}>
              Nome:
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Email:
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Telefone:
              <input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Endereço:
              <input
                type="text"
                name="address"
                value={editData.address}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
          </form>
        ) : (
          <div>
            <p style={styles.info}><strong>Nome:</strong> {profileData.name}</p>
            <p style={styles.info}><strong>Email:</strong> {profileData.email}</p>
            <p style={styles.info}><strong>Telefone:</strong> {profileData.phone}</p>
            <p style={styles.info}><strong>Endereço:</strong> {profileData.address}</p>
          </div>
        )}
        <button style={styles.button} onClick={handleEditToggle}>
          {isEditing ? "Salvar" : "Editar"}
        </button>
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
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px",
  },
  info: {
    fontSize: "16px",
    marginBottom: "10px",
    textAlign: "left",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Profile;
