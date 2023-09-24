import ConverterForm from "./ConverterForm/ConverterForm";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.currencyOptionsConatiner}>
      <ConverterForm />
    </main>
  );
};

export default Main;
