import { useEffect, useState } from "react";

const API_KEY = "332f6aa69932bf392f61b19c";

export default function ConvertCurrency() {
  const [ruble, setRuble] = useState("");
  const [currency, setCurrency] = useState("");
  const [convertData, setConvertData] = useState(null);
  const [resultCurrency, setResultCurrency] = useState("");
  const [error, setError] = useState(false);

  function clickHander() {
    setResultCurrency(
      (ruble * convertData.conversion_rates[currency]).toFixed(2)
    );
  }

  async function getCurrency() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/RUB`
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      setConvertData(result);
    } catch (error) {
      setError(true);
      console.warn(error);
    }
  }

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <>
      <h2>Currency converter</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label htmlFor="ruble">Ruble amount: </label>
          <input
            value={ruble}
            onChange={(e) => setRuble(e.target.value)}
            type="text"
            id="ruble"
          />
        </div>
        <div>
          <label htmlFor="currency">Currency code: </label>
          <input
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            type="text"
            id="currency"
          />
        </div>

        <button onClick={clickHander}>Convert</button>
        {isFinite(resultCurrency) && (
          <p>{`${ruble} RUB = ${resultCurrency} ${currency}`}</p>
        )}
        {error || (isNaN(resultCurrency) && <p>Error</p>)}
      </div>
    </>
  );
}
