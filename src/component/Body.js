import { useState } from "react";
import { restuarantList } from "../constant";
import RestuarantCard from "./RestuarantCard";

const Body = () => {
  const [resturantData, setResturantData] = useState(restuarantList);
  const [searchTxt, setSearchTxt] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  //below local variable is not used by react
  // let searchTxt="kfc";

  const handleSearchInput = (e) => {
    setSearchTxt(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTxt !== "") {
      const data = resturantData.filter((data) =>
        data.info.name.toLowerCase().includes(searchTxt.toLowerCase())
      );
      console.log(searchTxt, data);
      setResturantData(data);
    }else{
      setResturantData(restuarantList)
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchTxt}
          placeholder="Search resturant"
          onChange={(e) => {
            handleSearchInput(e);
          }}
        />
        <button
          onClick={(e) => {
            handleSearch(e);
          }}
        >
          Search
        </button>
      </div>
      {/* <button
        onClick={(e) => {
          handleClicked(e);
        }}
      >
        {searchClicked ? "Hide" : "Show"}
      </button>
      {searchClicked && <h1>{searchTxt}</h1>} */}

      <div className="res-list">
        {resturantData.map((rest, idx) => {
          return <RestuarantCard {...rest?.info} key={idx} />;
        })}
      </div>
    </>
  );
};

export default Body;
