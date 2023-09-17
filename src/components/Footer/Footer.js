import Button from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p className="company-name">Exchange With Us Company Sp. z o.o. ©</p>
      <div className="fb-insta-logo-container">
        <Button classPageName={"fa-brands fa-facebook-f fa-xl"} />
        <Button classPageName={"fa-brands fa-instagram fa-xl"} />
      </div>
    </footer>
  );
};

export default Footer;
