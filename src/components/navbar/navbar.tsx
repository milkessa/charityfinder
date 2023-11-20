import { FaHeart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="Logo text-[25px] text-blueColor">
          <strong> Charity</strong>Finder
        </h1>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Charity..."
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="absolute top-3 left-3 h-5 w-5 text-blueColor">
          <FaSearch />
        </div>
      </div>
      <div className=" text-blueColor">
        <FaHeart />
      </div>
    </div>
  );
};

export default Navbar;
