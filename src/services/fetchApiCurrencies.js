import axios from "axios";

export let isLoader = false;

export const fetchApiCurrencies = async (selectValue) => {
  const URL = `https://api.nbp.pl/api/exchangerates/rates/c/${selectValue}/?format=json`;
  try {
    isLoader = true;
    const response = await axios.get(URL);
    const ask = response.data?.rates?.[0]?.ask;
    return ask;
  } catch (error) {
    console.error(error);
    return "Error";
  } finally {
    console.log("done");
    isLoader = false;
  }
};
