// // "use client";
// // import styles from "./index.module.css";
// // import React, { useState } from "react";
// // import PageTransition from "../components/PageTransition";
// // import Image from "next/image";

// // const Login: React.FC = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phoneNumber:"",
// //     subject: "",
// //     message: "",
// //   });
// //   const handleChange = (
// //     e: React.ChangeEvent<
// //       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
// //     >
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     console.log("Form Data:", formData);
// //   };

// //   return (
// //     <PageTransition>
     
// // <div className={styles.scroll_down}>SCROLL DOWN
// //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
// //   <path d="M16 3C8.832031 3 3 8.832031 3 16s5.832031 13 13 13 13-5.832031 13-13S23.167969 3 16 3zm0 2c6.085938 0 11 4.914063 11 11 0 6.085938-4.914062 11-11 11-6.085937 0-11-4.914062-11-11C5 9.914063 9.914063 5 16 5zm-1 4v10.28125l-4-4-1.40625 1.4375L16 23.125l6.40625-6.40625L21 15.28125l-4 4V9z"/> 
// // </svg></div>
// // <div className={styles.container}></div>
// // <div className={styles.modal}>
// //   <div className={styles.modal_container}>
// //     <div className={styles.modal_left}>
// //       <h1 className={styles.modal_title}>Welcome!</h1>
// //       <p className={styles.modal_desc}>Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
// //       <div className={styles.input_block}>
// //         <label  className={styles.input_label}>Email</label>
// //         <input type="email" name="email" id="email" placeholder="Email"/>
// //       </div>
// //       <div className={styles.input_block}>
// //         <label className={styles.input_label}>Password</label>
// //         <input type="password" name="password" id="password" placeholder="Password"/>
// //       </div>
// //       <div className={styles.modal_buttons}>
// //         <a href="" >Forgot your password?</a>
// //         <button className={styles.input_button}>Login</button>
// //       </div>
// //       <p className="sign_up">Don't have an account? <a href="#">Sign up now</a></p>
// //     </div>
// //     <div className="modal_right">
// //       <Image width={20} height={20} className="modal_img" src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" 
      
      
// //       />
// //     </div>
// //     <button className={`${styles.icon_button} ${styles.close_button}`}>

// //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
// //     <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
// // </svg>
// //       </button>
// //   </div>
// //   <button className="modal_button">Click here to login</button>
// // </div>


// //     </PageTransition>
// //  );}


// // export default Login;
// "use client";

// import React, { useState } from "react";
// import styles from "./index.module.css";
// import Image from "next/image";

// const Login = () => {


//   return (

      
//         // <div className={styles.modal}>
//         //   <div className={styles.modalContainer}>
//         //     <div className={styles.modalLeft}>
//         //       <h1 className={styles.modalTitle}>Welcome!</h1>
//         //       <p className={styles.modalDesc}>
//         //         Fanny pack hexagon food truck, street art waistcoat kitsch.
//         //       </p>
//         //       <div className={styles.inputBlock}>
//         //         <label htmlFor="email" className={styles.inputLabel}>
//         //           Email
//         //         </label>
//         //         <input type="email" id="email" placeholder="Email" />
//         //       </div>
//         //       <div className={styles.inputBlock}>
//         //         <label htmlFor="password" className={styles.inputLabel}>
//         //           Password
//         //         </label>
//         //         <input type="password" id="password" placeholder="Password" />
//         //       </div>
//         //       <div className={styles.signUp}>
//         //         <button className={styles.buttonLogin}>Login</button>
//         //         <a href="#">Forgot your password?</a>
//         //       </div>
              
//         //     </div>
//         //     <div className={styles.modalRight}>
//         //       <Image
//         //         src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
//         //         alt="Decorative"
//         //         width={400}
//         //         height={400}
//         //       />
//         //     </div>
//         //     <button className={styles.iconButton} >
//         //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
//         //         <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z" />
//         //       </svg>
//         //     </button>
//         //   </div>
//         // </div>
        
//   );
// };

// export default Login;
// page.tsx
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