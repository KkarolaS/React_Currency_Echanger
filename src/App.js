import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.pageContainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
