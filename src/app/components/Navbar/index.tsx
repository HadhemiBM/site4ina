"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../Assests/logo4ina.png";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [solutionsDrop, setSolutionsDrop] = useState(false);
  const [postDrop, setPostDrop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const links = [
    { id: 1, link: "/accueil", name: "Home" },
    { id: 2, link: "/about", name: "AboutUs" },
    { id: 3, link: "/services", name: "Services" },
    { id: 4, link: "", name: "technical platform" },
    { id: 5, link: "", name: "Posts" },
    { id: 6, link: "/contact", name: "Contact" },
  ];
  const solutionsLinks = [
    { id: 2, link: "/solutions/demo", name: "Demo" },

    { id: 1, link: "/solutions/explore", name: "Explore" },
  ];
  const postsLinks = [
    { id: 1, link: "/posts/events", name: "Events" },
    { id: 2, link: "/posts/blog", name: "Blog" },
    { id: 3, link: "/posts/whitePapers", name: "White Papers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 730);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsDrop(false);
    setPostDrop(false);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    if (dropdownName === "technical platform") {
      setSolutionsDrop(!solutionsDrop);
      setPostDrop(false);
    } else if (dropdownName === "Posts") {
      setPostDrop(!postDrop);
      setSolutionsDrop(false);
    }
  };

  const handleMouseEnter = (dropdownName: string) => {
    if (!isMobile) {
      if (dropdownName === "technical platform") {
        setSolutionsDrop(true);
      } else if (dropdownName === "Posts") {
        setPostDrop(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setSolutionsDrop(false);
      setPostDrop(false);
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      ref={navbarRef}
    >
      <div className={styles.navbarContainer}>
        <Link href="/accueil">
          <Image
            className={styles.navbarLogoText}
            src={logo}
            alt="Logo 4ina Technologie"
            width={90}
            height={70}
          />
        </Link>


        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <div
          className={`${styles.navbarLinksContainer} ${
            mobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          {links.map(({ id, link, name }) => (
            <div
              key={id}
              className={styles.navbarLinkContainer}
              onMouseEnter={() => handleMouseEnter(name)}
              onMouseLeave={handleMouseLeave}
            >
              <h3
                className={`${styles.navbarLink} ${
                  pathname === link ? styles.activeLink : ""
                }`}
              >
                {link ? (
                  <Link href={link} onClick={closeMobileMenu}>
                    {name}
                  </Link>
                ) : (
                  <span onClick={() => handleDropdownToggle(name)}>{name}</span>
                )}
              </h3>
             
              {name === "technical platform" && solutionsDrop && (
                <div className={styles.dropdownMenu}>
                  {solutionsLinks.map(({ id, link, name }) =>
                    link.startsWith("http") ? (
                      <a
                        key={id}
                        href={link}
                        className={styles.dropdownItem}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                      >
                        {name}
                      </a>
                    ) : (
                      <Link
                        key={id}
                        href={link}
                        className={styles.dropdownItem}
                        onClick={closeMobileMenu}
                      >
                        {name}
                      </Link>
                    )
                  )}
                </div>
              )}

              {name === "Posts" && postDrop && (
                <div className={styles.dropdownMenu}>
                  {postsLinks.map(({ id, link, name }) => (
                    <Link
                      key={id}
                      href={link}
                      className={styles.dropdownItem}
                      onClick={closeMobileMenu}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
