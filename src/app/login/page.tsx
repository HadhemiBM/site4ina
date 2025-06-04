"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  try {
    const res = await fetch("http://localhost:3001/users/login", {
      method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", // 👉 indispensable pour que le cookie HTTP-only soit reçu
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json(); // 👉 always read response body
    if (!res.ok) {
          const message =
        data?.message ||
        (Array.isArray(data?.error) ? data.error.join(", ") : data?.error) || "Login failed.";
      throw new Error(message);
    }

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    router.push("/");
  } catch (err: any) {
    console.error("Login error:", err);
    setError(err.message || "Unexpected error. Try again later.");
  }
};

  return (
    <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "100px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
