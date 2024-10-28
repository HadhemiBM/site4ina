import styles from "./index.module.css";
import logo from '../../Assests/logo4ina.png'
import Image from "next/image";
const Footer =  () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.Right}>
        <Image  className={styles.RightLogo} src={logo} alt="Log4ina" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi sit amet neque tortor. </p>
        <div className={styles.TeamSocial}>
            <i className="fa-brands fa-linkedin fa-shake-facebook "  ></i>
            <i className="fa-brands fa-facebook fa-shake-facebook"></i>
            </div>
        </div>
        <div className={styles.middle}>
        <div className={styles.navigation}>
        <h6>Navigation</h6>
        <p>Home</p>
        <p>About US</p>
        <p>Services</p>
        <p>Solutions</p>
        <p>Posts</p>
        <p>Contact US</p>
        </div>
        <div className={styles.contact}>
        <h6>Contact Us</h6>
        <div className={styles.row}> 
        <i className="fa-solid fa-envelope"></i>
          <p>contact@4inatechnologie.com</p>
        </div>
        <div className={styles.row}> 
        <i className="fa-solid fa-location-dot"></i>
          <p>Technopark manouba, Manouba, Tunisia</p>
        </div>
        <div className={styles.row}> 
          <i className="fa-solid fa-phone"></i>
          <p>+216 23 507 648</p>
        </div>
        </div>
        </div>
        <div className={styles.Left}>
        <h6>Newsletter</h6>

        <form className={styles.form}>
        <input className={styles.input} type="email" placeholder="Enter your email" />
        <button  className={styles.SUb} type="submit">Subscribe</button>
        </form>
        <div>

        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;