import styles from './footer.module.css'; // Modul CSS faylini import qilish
import InstagramIcon from '../assets/icon/InstagramIcon';
import TwitterIcon from '../assets/icon/TwitterIcon';
import YouTubeIcon from '../assets/icon/YouTubeIcon';
import logo from '../assets/img/logo.png';

function Footer() {
  return (
    <footer className={styles.footer} >
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img src={logo} alt="Logo" className={styles.footerLogo} />
          <span className={styles.footerText}>SUN CO.</span>
        </div>
        <div className={styles.footerCenter}>
          <span>© 2023 dot.cards text task. All rights reserved</span>
        </div>
        <div className={styles.footerRight}>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
