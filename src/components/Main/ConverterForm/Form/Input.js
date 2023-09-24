const Input = ({ name, typeName, className, value, stepValue }) => {
  return (
    <input
      name={name}
      type={typeName}
      className={className}
      value={value}
      step={stepValue}
    />
  );
};

export default Input;
