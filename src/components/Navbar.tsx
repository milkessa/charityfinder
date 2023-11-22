import { SearchBarProp } from '../types/types';
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { FaHeart, FaSearch } from "react-icons/fa";

export const Navigation = (props: SearchBarProp) => {
    

    const [input, setInput] = useState('');

    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event);
        setInput(event.target.value);
    }

    const onClickClear = () => {
      setInput('');
  }

    return (
      <>
        <nav >
        <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="Logo text-[25px] text-blueColor">
          <strong><Link onClick={onClickClear} to="/"> Charity </Link></strong>Finder
        </h1>
      </div>
      <div className="relative">
        <input type="text"
          placeholder="Search Charity..."
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
          onChange={(event)=>onChangeInput(event)}></input>
          
        
        { input.trim() === "" ? null : 
            (<div className="bg-white grid grid-cols-3 gap-2 p-2 justify-left items-start max-h-48 overflow-y-auto w-full max-w-md">
              {props.filterData.length === 0 ? <p>No causes found</p> :
               props.filterData.map((data)=> <div key={data} >
                                                 <Link onClick={onClickClear} to={"/searchCharity/"+data} 
                                                 className="dark:hover:bg-gray-600 dark:hover:text-white">{data}</Link></div>)}

              </div>
            )}
        <div className="absolute top-3 left-3 h-5 w-5 text-blueColor">
          <FaSearch />
        </div>
      </div>
      <div className=" text-blueColor">
      <Link onClick={onClickClear} to="/Favorites">
        <FaHeart /></Link>
      </div>
    </div>
    </nav>
        <Outlet />
    </>
    );
  };
