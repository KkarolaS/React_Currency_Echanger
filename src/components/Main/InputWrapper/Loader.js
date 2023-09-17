const Loader = () => {
  return (
    <div className="loader-wrapper">
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
