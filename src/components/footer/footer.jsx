import "./footer.scss";
import LogoFooter from "../../assets/logo_white.png";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <img className="footer-img" alt="Kasa logo" src={LogoFooter} />
      <div className="rights">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
