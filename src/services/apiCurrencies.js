import { useState, useEffect } from "react";
import axios from "axios";

const apiCurrencies = ({ selectValue }) => {
  const [currencyValue, setCurrecyValue] = useState();
  useEffect(() => {
    async function fetchCurrency() {
      //loader loader.classList.remove("hidden");
      const response = await axios.get(
        `https://api.nbp.pl/api/exchangerates/rates/c/${selectValue}/?format=json`
      );
      const ask = response.data?.rates?.[0]?.ask;
      console.log(ask);
      setCurrecyValue(ask);
    }
    try {
      fetchCurrency();
    } catch (error) {
      //    errorInfo.textContent = "Błąd serwera. Spróbuj ponownie później";
      console.error(error);
    } finally {
      console.log("done");
      //   loader.classList.add("hidden");
    }
  }, [selectValue]);

  console.log(currencyValue);
  return currencyValue;
};

export default apiCurrencies;
