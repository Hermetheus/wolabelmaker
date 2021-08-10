import React from "react";

const Data = ({ filteredItems }) => {
  console.log(filteredItems);


  return (

       <div>

        <div className="div" style={{ width: 200 }}>
        </div>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Job Number</th>
              <th scope="col">Leg</th>
              <th scope="col">Part Number</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((d) => (
              <tr key={d.Item}>
                <td>{d["Job Number"]}</td>
                <td>{d["Leg"]}</td>
                <td>{d["Part Number"]}</td>
                <td>{d.Quantity}</td>
                <td>{d["Item Description"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Data;
