import { useState } from "react";

const CelciusToFahrenheit = () => {
  const [temp, setTemp] = useState<number>(0);

  const changeCelToFah = (cel: number) => {
    return (cel * 9) / 5 + 32;
  };

  return (
    <div className="flex flex-col justify-center items-center m-20">
      <input
        onChange={(evt) => setTemp(Number(evt.target.value))}
        className="border border-gray-300 outline-none p-1 rounded-lg w-60 align-middle text-gray-600"
        type="text"
        placeholder="Input temperature in Celcius"
      />
      <div className="text-2xl mt-5">{`Your temperature in Fahrenheit is ${changeCelToFah(temp)}`}</div>
    </div>
  );
};

export default CelciusToFahrenheit;
