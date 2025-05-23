"use client";
import styles from "./index.module.css";
import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import Link from "next/link";

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
        <h2 className={styles.LeftTitle}>
        Book Demo – Let's Bring Your 
        Vision to Life
          </h2>
          <p className={styles.RightDesc}>
            Kindly fill this form with your details about your inquiries and we
            would respond your inquiry shortly.
          </p>
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
