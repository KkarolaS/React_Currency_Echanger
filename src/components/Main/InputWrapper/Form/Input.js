const Input = ({ typeName, className, value, handleChange }) => {
  return (
    <input
      type={typeName}
      className={className}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
