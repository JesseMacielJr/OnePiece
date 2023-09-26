import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/JesseMacielJr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          Feito por <span>Jessé Júnior</span>
        </p>
      </a>
    </footer>
  );
};

export default Footer;
