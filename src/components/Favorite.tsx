import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Charity } from "../types/types";
import { FaLocationDot } from "react-icons/fa6";

export const Favorite = () => {
    const [results, setResults] = useState<Charity[]>([]);

    useEffect(() => {
        loadFaveStorage();
    },[]);

    const loadFaveStorage = () => {
        const jsonArrayString = localStorage.getItem(import.meta.env.VITE_FAVE_KEY);
        const jsonArray = JSON.parse(jsonArrayString || '[]');
        setResults(jsonArray);
    };
    
    return (<>
            {(results === null || results.length === 0 ? <div><h1>No current favorites</h1></div> : 
            <div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 padding-55">
          {results?.map((data) => (
            
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
            )}
          </>);
  };
