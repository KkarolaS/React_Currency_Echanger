import Logo from "./Logo";
import Title from "./Title";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <Logo />
      <Title />
    </header>
  );
};

export default Header;
