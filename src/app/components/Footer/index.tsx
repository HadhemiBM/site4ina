import styles from "./index.module.css";
import logo from "../../Assests/logo4ina.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.Right}>
          <Image className={styles.RightLogo} src={logo} alt="Log4ina" />
          <p>Connect with 4ina Technologie Innovate, Collaborate, Succeed </p>
        </div>
        <div className={styles.middle}>
          <div className={styles.navigation}>
            <h6>Navigation</h6>
            <Link href={"/home"}>
              <p>Home</p>
            </Link>
            <Link href={"/about"}>
              <p>About US</p>
            </Link>
            <Link href={"/services"}>
              <p>Services</p>
            </Link>
            <Link href={"/solutions/demo"}>
              <p>Solutions</p>
            </Link>
            <Link href={"/posts/events"}>
              <p>Posts</p>
            </Link>
            <Link href={"/contact"}>
              <p>Contact US</p>
            </Link>
          </div>
          <div className={styles.contact}>
            <h6>Contact Us</h6>
            <div className={styles.row}>
              <i className="fa-solid fa-envelope"></i>
              <Link href="mailto:contact@4inatechnologie.com">
                <p className={styles.textNo}>contact@4inatechnologie.com</p>
              </Link>
            </div>
            <div className={styles.row}>
              <i className="fa-solid fa-location-dot"></i>
              <Link
                href="https://maps.app.goo.gl/qMi4e4pi4yWP7PK46"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.textNo}
              >
                <p className={styles.textNo}>
                  Technopark mannouba, Mannouba, Tunisia
                </p>
              </Link>
            </div>
            <div className={styles.row}>
              <i className="fa-solid fa-phone "></i>
              <Link href="tel:+21623507648">
                <p className={styles.textNo}>+216 23 507 648</p>
              </Link>
            </div>
          </div>
          <div className={styles.TeamSocial}>
            <Link
              className={styles.textNo}
              href="https://www.linkedin.com/company/4ina-technologie/posts/?feedView=all"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fa-shake-facebook"></i>
            </Link>
            {/* <i className="fa-brands fa-facebook fa-shake-facebook"></i> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
