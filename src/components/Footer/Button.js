import "./Button.css";

const Button = ({ classPageName }) => {
  return (
    <button className="footer-icon-btn">
      <i className={classPageName}></i>
    </button>
  );
};

export default Button;
