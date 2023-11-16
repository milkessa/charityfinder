import React from "react";

const Homepage: React.FC = () => {
  return (
    <div>
        <p>djcndsbcik</p>
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Charity Finder</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search charities"
            className="px-3 py-1 mr-2 rounded border"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Homepage;
