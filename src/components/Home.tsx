import { useEffect, useState } from "react";
import { CharityResponse } from "../types/types";
import axios from "axios";
import { Link } from "react-router-dom";
import jsonData from "../CausesList.json";
import { FaLocationDot } from "react-icons/fa6";

export const Home = () => {

  const [results, setSearchResults] = useState<CharityResponse>();

  useEffect(() => {
    const data = jsonData.causes;

    const randomIndex = Math.floor(Math.random() * data.length);
    const apiKey = import.meta.env.VITE_API_KEY;
    axios
      .get<CharityResponse>(
        "https://partners.every.org/v0.2/search/" +
          data[randomIndex] +
          "?apiKey=" +
          apiKey
      )
      .then((response) => {
        setSearchResults(response.data);
      });
  }, []);

  return (
    <>
      <div className="w-100 bg-clip-padding">
        <div className="flex items-center justify-center w-100 h-96 bg-cover bg-center bg-[url('../public/header.jpg')]">
          <span className="text-center font-prompt tracking-wider text-[#F7F7F7] font-bold text-2xl sm:text-5xl">
            Changing The World Through Kindness
          </span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 padding-55">
          {results?.nonprofits.map((data) => (
            
            <div key={data.ein} className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
        {data.logoUrl !== undefined && data.logoUrl !== "" ? (
                   <img src={data.logoUrl}></img>
               ) : (
                 <img src="GenericIcon.png" width="48" height="48" />
               )}
        </div>
        <div className="ml-4">
        <h2 className="text-xl font-semibold"><Link to={"/charity/" + data.ein}> {data.name}</Link></h2>
          <FaLocationDot /><p className="text-gray-600">{data.location}</p>
        </div>
      </div>
      {/* Additional content or actions can be added here */}
    </div>
          ))}
        </ul>
      </div>
    </>
  );
};
