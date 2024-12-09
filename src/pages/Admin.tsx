import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const Admin: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("http://localhost:8000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  return (

  <div style={styles.container}>
      <h1 style={styles.heading}>Administração de Usuários</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Nome</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>
                <span
                  style={{
                    ...styles.statusBadge,
                    backgroundColor: user.active ? "#4CAF50" : "#F44336",
                  }}
                >
                  {user.active ? "Ativo" : "Inativo"}
                </span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.editButton}
                  onClick={() => handleEdit(user.id)}
                >
                  Editar
                </button>
                <button
                  style={styles.deleteButton}
                  onClick={() => handleDelete(user.id)}
                >
                  Excluir
                </button>
                <button
                  style={styles.statusButton}
                  onClick={() => handleToggleStatus(user.id, !user.active)}
                >
                  {user.active ? "Desativar" : "Ativar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#007bff",
    color: "#fff",
    textAlign: "left",
    padding: "12px",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
  statusBadge: {
    padding: "5px 10px",
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "12px",
  },
  editButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },
  statusButton: {
    backgroundColor: "#ffc107",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};


export default Admin;
