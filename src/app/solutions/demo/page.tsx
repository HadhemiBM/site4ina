"use client";
import styles from "./index.module.css";
import React, { useState } from "react";
import PageTransition from "../../components/PageTransition";
import Link from "next/link";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      if (res.ok) {
        // alert("Your message has been sent successfully!");
        Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for reaching out. We'll get back to you shortly.",
        confirmButtonColor: "#0003da",
      });
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      } else {
        // alert("Failed to send message: " + result.message);
         Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      });
      }
    } catch (err) {
      alert("An error occurred. Please try again later.");
      console.error(err);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
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
  type ContactItemProps = {
    icon: string;
    title: string;
    children: React.ReactNode;
  };
  const ContactItem = ({ icon, title, children }: ContactItemProps) => (
    <div className={styles.rowContact}>
      <i className={`fa-solid ${icon}`} />
      <div className={styles.columnContact}>
        <p>{title}</p>

        {children}
      </div>
    </div>
  );
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Left}>
          {/* <form
            className={styles.formContainer}
            action="https://formsubmit.co/4inatechnologie@gmail.com"
            method="POST"
            encType="multipart/form-data"
          > */}
          <form className={styles.formContainer} onSubmit={handleSubmit}>

            <div className={styles.row}>
              <div className={styles.column}>
                <label htmlFor="Full name" className={styles.label}>
                  Full name*
                </label>
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
                <label htmlFor="Phone number" className={styles.label}>
                  Phone number*
                </label>
                <input
                  className={styles.input}
                  type="tel"
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className={styles.column}>
              <label htmlFor="Email" className={styles.label}>
                Email*
              </label>
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
              <label htmlFor="Additional information" className={styles.label}>
                Additional information*
              </label>
              <textarea
                value={formData.message}
                name="message"
                onChange={handleChange}
                className={styles.inputMessage}
                placeholder="Your Message"
                required
              />
            </div>
            <button className={styles.submitbtn} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className={styles.Right}>
          <h2 className={styles.RightTitle}>
            Book Demo – Let's Bring Your Vision to Life
          </h2>
          <p className={styles.RightDesc}>
            Kindly fill this form with your details about your inquiries and we
            would respond your inquiry shortly.
          </p>
             <ContactItem icon="fa-solid fa-paper-plane" title="Send an email">
  <Link href="mailto:contact@4inatechnologie.com" className={styles.Link}>
   <p className={styles.columnContact_p}> contact@4inatechnologie.com</p>
  </Link>
</ContactItem>
          <ContactItem icon="fa-phone" title="Give us a call">
            <Link href="tel:+21623507648" className={styles.Link}>
              <p className={styles.columnContact_p}>+216 23 507 648</p>
            </Link>
          </ContactItem>

          <ContactItem icon="fa-solid fa-location-dot" title="Office address">
            <Link
              href="https://maps.app.goo.gl/qMi4e4pi4yWP7PK46"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.Link}
            >
              <p className={styles.columnContact_p}>
                Technopark Manouba, Tunisia
              </p>
            </Link>
          </ContactItem>
           <ContactItem icon="fa-solid fa-clock" title="Working hours">
  
   <p className={styles.columnContact_p}>Mon - Fri: 08am - 5pm</p>

</ContactItem>
        </div>
      </div>
      
    </PageTransition>
  );
};

export default Contact;
