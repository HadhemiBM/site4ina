"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import Image from "next/image";
import logo from '../../Assests/logo4ina.png';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [solutionsDrop, setSolutionsDrop] = useState(false);
  const [postDrop, setPostDrop] = useState(false);

  const links = [
    { id: 1, link: "/", name: "Accueil" },
    { id: 2, link: "/about", name: "AboutUs" },
    { id: 3, link: "/services", name: "Services" },
    { id: 4, link: "/solutions", name: "Solutions" },
    { id: 5, link: "/posts", name: "Posts" },
    { id: 6, link: "/contact", name: "Contact" },
  ];
  const solutionsLinks = [
    { id: 1, link: "/solutions/explore", name: "Explore" },
    { id: 2, link: "/solutions/demo", name: "Demo" },
  ];
  const PostsLinks = [
    { id: 1, link: "/posts/events", name: "Events" },
    { id: 2, link: "/posts/blog", name: "Blog" },
    { id: 3, link: "/posts/whitePapers", name: "White Papers" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Image
          className={styles.navbarLogoText}
          src={logo}
          alt="Logo"
        />
        <div className={styles.navbarLinksContainer}>
          {links.map(({ id, link, name }) => (
            <div
              key={id}
              className={styles.navbarLinkContainer}
              onMouseEnter={() => {
                if (name === "Solutions") {
                  setSolutionsDrop(true);
                } else if (name === "Posts") {
                  setPostDrop(true);
                }
              }}
              onMouseLeave={() =>{ if (name === "Solutions") {
                setSolutionsDrop(false);}else if (name === "Posts") {
                    setPostDrop(false);}
              }}
            >
              <h3
                className={`${styles.navbarLink} ${
                  pathname === link ? styles.activeLink : ""
                }`}
              >
                <Link href={link}>{name}</Link>
              </h3>
              {name === "Solutions" && solutionsDrop && (
                <div className={styles.dropdownMenu}>
                  {solutionsLinks.map(({ id, link, name }) => (
                    <Link key={id} href={link} className={styles.dropdownItem}>
                      {name}
                    </Link>
                  ))}
                </div>
              )}
   {name === "Posts" && postDrop && (
                <div className={styles.dropdownMenu}>
                  {PostsLinks.map(({ id, link, name }) => (
                    <Link key={id} href={link} className={styles.dropdownItem}>
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.navbarLogin}>
          <h3 className={styles.LoginContainer}>
            <Link className={styles.LoginText} href="/login">Login</Link>
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;