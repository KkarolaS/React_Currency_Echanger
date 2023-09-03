import Option from "./Option";

const Select = () => {
  return (
    <div className="currencies-options">
      <select name="currencies" className="select-options">
        <Option value={"choose"} name={"Wybierz"} />
        <Option value={"eur"} name={"EUR"} />
        <Option value={"usd"} name={"USD"} />
        <Option value={"chf"} name={"CHF"} />
      </select>
    </div>
  );
};

export default Select;
