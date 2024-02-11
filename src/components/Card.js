import React, { useState } from "react";
import cloudImage from "../images/cloud.jpg";

function Card({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="card">
      <h1>React Weather App</h1>
      <div>
        <img
          src={cloudImage}
          alt=""
          srcset=""
          height={"200px"}
          width={"200px"}
        />
      </div>
      <div>
        <h2>Find Weather of Your City</h2>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onSearch(searchText);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Card;
