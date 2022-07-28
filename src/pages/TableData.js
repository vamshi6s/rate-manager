import React from "react";
import "../Styles/style.scss";

import SelectTableComponent from "../components/TableData";

export default function TableData() {
  return (
    <div className="Container table1">
      <h1>React Table</h1>

      <SelectTableComponent />
    </div>
  );
}