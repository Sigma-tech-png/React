import { useEffect, useState } from "react";

export default function App() {
  const [cookie, setCookie] = useState("");

  // получить cookie с сервера
  async function fetchCookie() {
    const res = await fetch("https://done-2cbv.onrender.com/get-cookie", {
      credentials: "include"
    });

    const data = await res.json();
    setCookie(data.cookie);
  }

  // установить cookie
  async function setCookieServer() {
    await fetch("https://done-2cbv.onrender.com/set-cookie", {
      credentials: "include"
    });

    fetchCookie();
  }

  // удалить cookie
  async function deleteCookie() {
    await fetch("https://done-2cbv.onrender.com/delete-cookie", {
      credentials: "include"
    });

    fetchCookie();
  }

  useEffect(() => {
    fetchCookie();
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      
      <h1>🍪 Cookie App (React + Express)</h1>

      <button onClick={setCookieServer}>
        Установить cookie
      </button>

      <button onClick={deleteCookie}>
        Удалить cookie
      </button>

      <div style={{
        marginTop: 20,
        padding: 20,
        background: "#eee",
        borderRadius: 10
      }}>
        {cookie
          ? "Cookie: " + cookie
          : "Cookie нет"}
      </div>
    </div>
  );
}