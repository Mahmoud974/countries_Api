import React from "react";

const Card = ({ flag }) => {
  console.log(flag.continents[0]);
  return (
    <>
      <div className="py-4">
        <div className="relative shadow-lg group container max-w-sm flex justify-center items-center  mx-auto content-div ">
          <div className="">
            <img
              src={flag.flags.png}
              alt={flag.flags.alt}
              className="rounded-xl"
            />
          </div>
          <div className="absolute opacity-0  group-hover:opacity-90  w-full ">
            <div className="text-md font-bold text-white tracking-wider leading-relaxed font-sans bg-slate-900 text-center ">
              <h2 className="text-2xl font-bold">{flag.name.common}</h2>
              <p className="text-md italic">{flag.capital}</p>

              <p>Pop. {flag.population.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
