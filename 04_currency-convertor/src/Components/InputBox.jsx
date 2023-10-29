import React from "react";

const InputBox = ({
  label,
  selectCurrency,
  amount,
  onAmountChange,
  amountDisabled = false,
  currencyOptions = [],
  onCurrencyChange,
}) => {
  return (
    <>
      {error && <WarningBanner error={error} />}
      <div className="bg-white text-sm rounded-lg px-3 py-4 flex">
        <div className="w-1/2">
          <label className="inline-block text-black/40 mb-1" htmlFor="amount">
            {label}
          </label>
          <input
            className="w-full outline-none bg-transparent py-1.5"
            type="number"
            autoComplete="off"
            id="amount"
            autoCorrect="false"
            value={amount}
            placeholder={amount}
            disabled={amountDisabled}
            onChange={(e) => onAmountChange(e.target.value)}
          />
        </div>
        <div className="w-1/2 flex justify-end flex-wrap text-right">
          <p className="text-black/40 w-full mb-2">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
