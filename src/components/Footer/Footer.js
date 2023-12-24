import Button from "./Button/Button";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.appFooter}>
      <p className={classes.companyName}>Exchange With Us Company GmbH ©</p>
      <div className={classes.fbInstaLogoContainer}>
        <Button classPageName={"fa-brands fa-facebook-f fa-xl"} />
        <Button classPageName={"fa-brands fa-instagram fa-xl"} />
      </div>
    </footer>
  );
};

export default Footer;
