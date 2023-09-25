import classes from "./Button.module.css";

const Button = ({ classPageName }) => {
  return (
    <button className={classes.footerIconBtn}>
      <i className={classPageName}></i>
    </button>
  );
};

export default Button;
