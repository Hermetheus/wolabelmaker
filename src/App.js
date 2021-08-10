import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";
import Card from "./components/Card";


function App() {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [filteredItems, setfilteredItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
        // console.log(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };


  useEffect(() => {
    setfilteredItems(
      items.filter((item) => {
           if (item.WO_BASE_ID === "") {
          return "";
        } else if
           (item.RQ_PART_ID === "" || undefined) {
           return "";
        } else if (item.WO_SUB_ID === "") {
          return ""
        } else {
          console.log(item);
          console.log(item.WO_SUB_ID);
          return item.WO_SUB_ID.match(searchItems) && item.WO_BASE_ID(searchItems)
        }
      })
    );

    return () => {};
  }, [searchItems, items]);



  return (
    <div className="app">
      <div id="file" className="input">
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <input
          id="search"
          type="text"
          placeholder="Job Number"
          onChange={(e) => setSearchItems(e.target.value)}
        />
        <input
          id="search"
          type="text"
          placeholder="Leg Number"
          onChange={(e) => setSearchItems(e.target.value)}
        />
      </div>
          <Card filteredItems={filteredItems} />
    </div>
  );
}

export default App;
