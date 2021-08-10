import React from 'react'
import "../App.css"
import Hercules from "../images/Hercules-Logo.png"
import Door from "../images/door-logo-removebg-preview.png"




const EachCard = ( {filteredItems} ) => {
  // function roundDims(filteredItems) {
  //   return filteredItems.RQ_CALC_QTY * 12 / filteredItems.RQ_DIMENSIONS.round();
  // }

  // console.log(filteredItems);
  return (
    <>
      <div className="topline">
        <span className="job">Job #: {filteredItems.WO_BASE_ID}</span>
        <span className="part">Part #: {filteredItems.RQ_PART_ID}</span>
        <div className="quantity">
          <span className="quantity">
            Quantity:{" "}
            {!filteredItems.RQ_CALC_QTY ? (
              <span>{Math.ceil(filteredItems.OP_CALC_START_QTY)}</span>
            ) : (
              <span>{Math.ceil(filteredItems.RQ_CALC_QTY)}</span>
            )}
          </span>
          <span>
            {filteredItems.RQ_DIMENSIONS ? (
              <span className="cut">
                Cut to:{" "}
                {Math.ceil(
                  (filteredItems.RQ_DIMENSIONS / 12) % filteredItems.RQ_CALC_QTY
                )}{" "}
                to {filteredItems.RQ_DIMENSIONS}"
              </span>
            ) : (
              <span></span>
            )}
          </span>
        </div>
      </div>
      <div className="bottomline">
        <div className="leg">
          <span className="">Leg #: {filteredItems.WO_SUB_ID}</span>
          <span>Piece #: {Math.round(filteredItems.RQ_PIECE_NO)}</span>
        </div>
        <span className="description" maxlength="35">
          {filteredItems["RQ_PART_DESCRIPTION.1"] ? (
            <span className="inner-wrap" maxlength="35">{filteredItems["RQ_PART_DESCRIPTION.1"]}</span>
          ) : (
            <span className="inner-wrap">{filteredItems.RQ_LONG_DESCR}</span>
          )}
        </span>
        <div className="image">
          {!filteredItems.WO_BASE_ID.startsWith("H") ? (
            <img className="logo" src={Door} alt="Door Engineering" />
          ) : (
            <img className="logo" src={Hercules} alt="Hercules" />
          )}
        </div>
      </div>
    </>
  );
}

export default EachCard
