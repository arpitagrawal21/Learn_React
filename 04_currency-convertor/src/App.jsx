import React, { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  return (
    <div
      className="w-full h-screen flex justify-center flex-wrap items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?auto=format&fit=crop&q=80&w=1555&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="py-6 px-8 rounded-lg w-full max-w-md  backdrop-blur-2xl bg-black bg-opacity-50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="from"
              selectCurrency={from}
              currencyOptions={options}
              amount={amount}
              onAmountChange={(val) => setAmount(val)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="to"
              selectCurrency={to}
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisabled
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
