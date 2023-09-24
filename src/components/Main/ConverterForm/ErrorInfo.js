import "./ErrorInfo.css";

const ErrorInfo = ({ text }) => {
  return (
    <section className="error-wrapper">
      <p className="error-info">{text}</p>
    </section>
  );
};

export default ErrorInfo;
