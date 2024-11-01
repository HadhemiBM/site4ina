"use client";
import styles from "./index.module.css";
import React, { useState } from "react";
import PageTransition from "../components/PageTransition";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber:"",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Left}>
          <form className={styles.formContainer}  
                  action="https://formsubmit.co/4inatechnologie@gmail.com"

          method="POST"
          encType="multipart/form-data" >
            <div className={styles.row}>
              <div className={styles.column}>
                <label className={styles.label}>Full name*</label>
                <input
                  className={styles.input}
                  type="text"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className={styles.column}>
                <label className={styles.label}>Phone number*</label>
                <input
                  className={styles.input}
                  type="phone"
                  value={formData.phoneNumber}
                  name="phoneNumber"

                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className={styles.column}>
              <label className={styles.label}>Email*</label>
              <input
               value={formData.email}
               onChange={handleChange}
                className={styles.input}
            name="email"

                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.column}>
              <label className={styles.label}>
                What is your enquiry about?*
              </label>
              <select
                value={formData.subject}
                onChange={handleChange}
                className={styles.select}
            name="subject"
               
                required
              >
                <option value="Select one" disabled>
                  Select one
                </option>
                <option value="General inquiry">General inquiry</option>
                <option value="Bug report">Bug report</option>
                <option value="Feature request">Feature request</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.column}>
              <label className={styles.label}>Additional information*</label>
              <textarea
               value={formData.message}
            name="message"

               onChange={handleChange}
                className={styles.inputMessage}
                placeholder="Your Message"
                required
              />
            </div>
            <button className={styles.submitbtn} type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.Right}>
          <h2 className={styles.RightTitle}>
            Connect with 4ina Technologie Innovate, Collaborate, Succeed
          </h2>
          <p className={styles.RightDesc}>
            Kindly fill this form with your details about your inquiries and we
            would respond your inquiry shortly.
          </p>

          <div className={styles.rowContact}>
          <i className="fa-solid fa-paper-plane" ></i>
            <div className={styles.columnContact}>
              <p>Send an email</p>

              <p className={styles.columnContact_p}>contact@4inatechnologie.com</p>
            </div>
          </div>
          <div className={styles.rowContact}>
          <i className="fa-solid fa-phone"></i>
            <div className={styles.columnContact}>
              <p>Give us a call</p>

              <p className={styles.columnContact_p}>+216 23 507 648</p>
            </div>
          </div>
          <div className={styles.rowContact}>
          <i className="fa-solid fa-location-dot"></i>
            <div className={styles.columnContact}>
              <p>Office address</p>

              <p className={styles.columnContact_p}>Technopark manouba, Manouba Tunisia</p>
            </div>
          </div>
          <div className={styles.rowContact}>
          <i className="fa-solid fa-clock"></i>
            <div className={styles.columnContact}>
              <p>Working hours</p>

              <p className={styles.columnContact_p}>Mon - Sat: 10am - 4pm</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
