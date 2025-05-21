
"use client";

import React from "react";
import styles from "./index.module.css";

const LoginPage = () => {
  return (
    <div className={styles.boddy}>
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className={styles.forgotPass}>
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className={styles.btn}>Login</button>
          {/* <div className={styles.signupLink}>
            <a href="#">Signup</a>
          </div> */}
        </form>
      </div>
      {Array.from({ length: 50 }).map((_, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}></span>
      ))}
    </div>
    </div>
  );
};

export default LoginPage;
