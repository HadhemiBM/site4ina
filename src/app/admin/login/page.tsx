"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(
        "https://site4ina-back.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 👉 indispensable pour que le cookie HTTP-only soit reçu
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await res.json(); // 👉 always read response body
      if (!res.ok) {
        const message =
          data?.message ||
          (Array.isArray(data?.error) ? data.error.join(", ") : data?.error) ||
          "Login failed.";
        throw new Error(message);
      }

      localStorage.setItem("token", data.access_token);
      // localStorage.setItem("user", JSON.stringify(data.user));
      // localStorage.setItem("user", JSON.stringify(data.user)); // ✅ optional

      console.log("succ"); // 👈 add this for more insight

      router.push("/");
    } catch (err: any) {
      console.error("Login error:", err.message);
      console.dir(err); // 👈 add this for more insight
      setError(err.message || "Unexpected error. Try again later.");
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.SmallContainer}>
        {/* <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "100px" }}> */}
        <h2>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputContainer}>
            <label>Email:</label>
            <input
              className={styles.inputForm}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Password:</label>
            <input
              className={styles.inputForm}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={styles.buttonLogin} type="submit">
            Login
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
