import React from "react";

const OptionCountries = ({
  setSortPopulation,
  setRange,
  range,
  setSortContinent,
  sortContinent,
}) => {
  const arr_continents = [
    "Africa",
    "Europe",
    "Asia",
    "South America",
    "North America",
    "Oceania",
  ];
  return (
    <div className="flex flex-wrap justify-between bg-slate-800 text-slate-100 p-4 rounded-full px-12 mb-6 items-center">
      <div className="flex">
        <input
          type="range"
          name=""
          id=""
          min="10"
          max="250"
          className="w-34 bg-slate-500"
          onInput={(e) => setRange(e.target.value)}
        />
        <p className="ml-2 ">{range}</p>
      </div>

      {/* Trier par population */}
      <div className=" space-x-4 text-center flex ">
        <p className="italic">Triez la population</p>
        <input
          type="radio"
          name="triez"
          id=""
          className=""
          defaultChecked
          onInput={() => setSortPopulation(true)}
        />{" "}
        ↑
        <input
          type="radio"
          name="triez"
          id=""
          className=""
          onInput={() => setSortPopulation(false)}
        />{" "}
        ↓
      </div>
      <div className="space-x-4 pt-1 font-bold">
        {arr_continents.map((continent, index) => (
          <>
            <input
              key={index}
              type="radio"
              name="continent"
              id={continent}
              onChange={() => setSortContinent(continent)}
            />
            <label htmlFor={continent}>{continent}</label>
          </>
        ))}
      </div>
    </div>
  );
};

export default OptionCountries;
