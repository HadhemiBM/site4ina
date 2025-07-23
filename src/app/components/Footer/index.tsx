import styles from "./index.module.css";
import logo from "../../Assests/logo4ina.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.Logo}>
                 <Link href="/accueil">
  

          <Image className={styles.RightLogo} src={logo} alt="Log-4inaTechnologie" />
        </Link>

          <p>Innovate, Collaborate, Succeed </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.roww}>
            <div className={styles.row}>
              <Link
                className={styles.Link}
                href="https://www.linkedin.com/company/4ina-technologie/posts/?feedView=all"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-shake-facebook"></i>
              </Link>
              <Link
                className={styles.Link}
                href="https://www.linkedin.com/company/4ina-technologie/posts/?feedView=all"
                target="_blank"
              >
                <p className={styles.textNo}>4InA technologie</p>
              </Link>
            </div>
            <div className={styles.row}>
              <Link
                href="mailto:contact@4inatechnologie.com"
                className={styles.textNo}
              >
                <i className="fa-solid fa-envelope"></i>
              </Link>

              <Link
                href="mailto:contact@4inatechnologie.com"
                className={styles.textNo}
              >
                <p className={styles.textNo}>contact@4inatechnologie.com</p>
              </Link>
            </div>
          </div>
          <div className={styles.roww}>
            <div className={styles.row}>
              <Link href="tel:+21623507648" className={styles.Link}>
                <i className="fa-solid fa-phone "></i>
              </Link>
              <Link href="tel:+21623507648" className={styles.Link}>
                <p className={styles.textNo}>+216 23 507 648</p>
              </Link>
            </div>
            <div className={styles.row}>
              <Link
                href="https://maps.app.goo.gl/qMi4e4pi4yWP7PK46"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.Link}
              >
                <i className="fa-solid fa-location-dot"></i>
              </Link>

              <Link
                href="https://maps.app.goo.gl/qMi4e4pi4yWP7PK46"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.textNo}
              >
                <p className={styles.textNo}>Technopark mannouba, Mannouba</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
