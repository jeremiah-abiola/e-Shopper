const getCurrencyOptions = () => {
  const response = fetch('https://api.exchangerate.host/symbols');
  console.log(response);
  const json = response.json();

  return json.symbols;
}

getCurrencyOptions();