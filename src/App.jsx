import { useEffect, useState } from "react";

const API = "https://done-2cbv.onrender.com";

export default function App() {
  const [session, setSession] = useState("");

  // 🔍 получить cookie
  async function fetchMe() {
    const res = await fetch(`${API}/me`, {
      credentials: "include"
    });

    const data = await res.json();
    setSession(data.session);
  }

  // 🍪 login (ставим cookie)
  async function login() {
    await fetch(`${API}/login`, {
      credentials: "include"
    });

    fetchMe();
  }

  // ❌ logout
  async function logout() {
    await fetch(`${API}/logout`, {
      credentials: "include"
    });

    fetchMe();
  }

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      
      <h1>🍪 Cookie App</h1>

      <button onClick={login}>
        Login
      </button>

      <button onClick={logout}>
        Logout
      </button>

      <div style={{
        marginTop: 20,
        padding: 20,
        background: "#eee",
        borderRadius: 10
      }}>
        {session
          ? "Cookie: " + session
          : "Cookie нет"}
      </div>
    </div>
  );
}