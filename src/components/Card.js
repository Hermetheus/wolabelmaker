import React from "react";
import EachCard from "./EachCard";
import "../App.css";

const Card = ({ filteredItems }) => {
  console.log(filteredItems);
  return (
    <div className="wrapper">
      {filteredItems.map((d) => {
        return (
          <div className="wrapper">
            <div className="card">
              <EachCard filteredItems={d} />

              {/* <EachCard filteredItems={d} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
