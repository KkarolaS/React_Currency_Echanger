const ErrorInfo = ({ text, className }) => {
  return (
    <section className={className}>
      <p className="error-info">{text}</p>
    </section>
  );
};

export default ErrorInfo;
