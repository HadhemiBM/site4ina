import styles from "./index.module.css";
import logo from '../../Assests/logo4ina.png'
import Image from "next/image";
import Link from "next/link";
const Footer =  () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.Right}>
        <Image  className={styles.RightLogo} src={logo} alt="Log4ina" />
        <p>Connect with 4ina Technology Innovate, Collaborate, Succeed </p>
        
        </div>
        <div className={styles.middle}>
        <div className={styles.navigation}>
        <h6>Navigation</h6>
        <Link href={"/home"} >
        <p >Home</p>
        </Link>
        <Link href={"/about"} >
        <p>About US</p>
        </Link>
        <Link href={"/services"} >
        <p>Services</p>
        </Link>
        <Link href={"/solutions/demo"} >
        <p>Solutions</p>
        </Link>
        <Link href={"/posts/events"} >
        <p>Posts</p>
        </Link>
        <Link href={"/contact"} >
        <p>Contact US</p>
        </Link>

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
        <div className={styles.TeamSocial}>
            <i className="fa-brands fa-linkedin fa-shake-facebook "  ></i>
            <i className="fa-brands fa-facebook fa-shake-facebook"></i>
            </div> 
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;