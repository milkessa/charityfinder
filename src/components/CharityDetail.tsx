import { useEffect, useState } from "react";
import { CharityDetails, CharityDetailsResponse } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";

export const CharityDetail = () => {
  const [results, setSearchResults] = useState<CharityDetails | undefined>(undefined);
  const [isFavorite, setFavorite] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchCharityDetails = async () => {
      try {
        if (id !== undefined) {
          LookInStorage(id);
        }
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get<CharityDetailsResponse>(
          `https://partners.every.org/v0.2/nonprofit/${id}?apiKey=${apiKey}`
        );
        const charity = response.data;
        setSearchResults(charity.data.nonprofit);
      } catch (error) {
        console.error("Error fetching charity details:", error);
      }
    };

    fetchCharityDetails();
  }, [id]);

  useEffect(() => {
    if (results) {
      LookInStorage(results.ein); // Assuming 'ein' is the unique identifier for the charity
    }
  }, [results]);

  const onClickFavorite = () => {
    if (results) {
      UpdateStorage(results);
      setFavorite(!isFavorite);
    }
  };

  const LookInStorage = (id: string) => {
    const jsonArrayString = localStorage.getItem(import.meta.env.VITE_FAVE_KEY);
    if (jsonArrayString) {
      const jsonArray = JSON.parse(jsonArrayString);
      const isObjectExisting = jsonArray.some((item: CharityDetails) => item.ein === id);
      setFavorite(isObjectExisting);
    }
  };

  const UpdateStorage = (charity: CharityDetails) => {
    const jsonArrayString = localStorage.getItem(import.meta.env.VITE_FAVE_KEY);
    let jsonArray: CharityDetails[] = [];
    if (jsonArrayString) {
      jsonArray = JSON.parse(jsonArrayString);
    }

    const isObjectExisting = jsonArray.some((item) => item.ein === charity.ein);

    if (isObjectExisting) {
      const updatedArray = jsonArray.filter((item) => item.ein !== charity.ein);
      localStorage.setItem(import.meta.env.VITE_FAVE_KEY, JSON.stringify(updatedArray));
    } else {
      jsonArray.push(charity);
      localStorage.setItem(import.meta.env.VITE_FAVE_KEY, JSON.stringify(jsonArray));
    }
  };

  return (
    <>
      {results === undefined ? (
        <div>Charity not found</div>
      ) : (
        <div className="container mt-32 mx-auto p-4 md:p-0">
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            <img className="object-cover h-48 w-96" src={results.coverImageUrl} alt="Cover" />
            {results.logoUrl ? (
              <img src={results.logoUrl} alt="Logo" />
            ) : (
              <img src="../GenericIcon.png" alt="Default Icon" width="48" height="48" />
            )}
            <h1 className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
              {results.name}
            </h1>
            <h2 className="mb-0 mt-3 text-grey-dark text-sm italic">{results.location}</h2>
            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
              {results.description}
            </p>{" "}
            <br />
            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
              {results.descriptionLong}
            </p>
          </div>
          <div className="flow-right w-auto pt-10">
            <button
              className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2"
              onClick={onClickFavorite}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorite"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
