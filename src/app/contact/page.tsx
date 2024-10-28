"use client";
import styles from "./index.module.css";
import React from "react";
import PageTransition from "../components/PageTransition";

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Left}>
          <div className={styles.formContainer}>
            <div className={styles.row}>
              <div className={styles.column}>
                <label className={styles.label}>Full name*</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className={styles.column}>
                <label className={styles.label}>Phone number*</label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className={styles.column}>
              <label className={styles.label}>Email*</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.column}>
              <label className={styles.label}>
                What is your enquiry about?*
              </label>
              <select
                className={styles.select}
                defaultValue="Select one"
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
                className={styles.inputMessage}
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className={styles.Right}>
          <h2 className={styles.RightTitle}>
            Connect with 4ina Technology Innovate, Collaborate, Succeed
          </h2>
          <p className={styles.RightDesc}>
            Kindly fill this form with your details about your inquiries and we
            would respond your inquiry shortly.
          </p>

          <div className={styles.row}>
            <i className="fa-solid fa-paper-plane"></i>
            <div className={styles.columnContact}>
              <p>Send an email</p>

              <p>contact@4inatechnologie.com</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
