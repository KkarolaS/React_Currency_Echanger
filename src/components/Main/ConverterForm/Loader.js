import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <button className="btn btn-danger" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status"></span>
      </button>
    </div>
  );
};

export default Loader;
