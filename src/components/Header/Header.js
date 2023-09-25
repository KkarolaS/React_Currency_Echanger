import Logo from "./Logo/Logo";
import Title from "./Title/Title";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.appHeader}>
      <Logo />
      <Title />
    </header>
  );
};

export default Header;
