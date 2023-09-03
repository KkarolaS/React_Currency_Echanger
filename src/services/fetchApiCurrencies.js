import axios from "axios";

export const fetchApiCurrencies = async (selectValue) => {
  const URL = `https://api.nbp.pl/api/exchangerates/rates/c/${selectValue}/?format=json`;

  try {
    //loader loader.classList.remove("hidden");
    const response = await axios.get(URL);
    const ask = response.data?.rates?.[0]?.ask;
    console.log(ask);
    return ask;
  } catch (error) {
    //    errorInfo.textContent = "Błąd serwera. Spróbuj ponownie później";
    console.error(error);
  } finally {
    console.log("done");
    //   loader.classList.add("hidden");
  }
};
