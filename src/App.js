import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import OptionCountries from "./components/OptionCountries";

const App = () => {
  const [data, setData] = useState([]);
  const [range, setRange] = useState(20);
  const [sortPopulation, setSortPopulation] = useState(true);
  const [sortContinent, setSortContinent] = useState("Africa");

  useEffect(() => {
    console.log(typeof sortContinent);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-center text-9xl font-bold my-8">All Flags 🏴</h1>
      <OptionCountries
        setSortPopulation={setSortPopulation}
        setRange={setRange}
        range={range}
        setSortContinent={setSortContinent}
        sortContinent={sortContinent}
      />
      {sortContinent && (
        <button
          className="border border-lime-900 rounded-md px-12 mx-auto flex text-center"
          onClick={() => setSortContinent("")}
        >
          Effacer le filtre
        </button>
      )}
      <div className="grid grid-cols-8 gap-4 ">
        {data

          .slice(0, range)

          .sort((a, b) =>
            sortPopulation
              ? b.population - a.population
              : a.population - b.population
          )
          .filter((continent) => continent.continents[0] === sortContinent)
          .map((flag, index) => (
            <Card key={index} flag={flag} />
          ))}
      </div>
    </div>
  );
};

export default App;
