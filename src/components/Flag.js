import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "../Styles/style.scss";


export default function Flag() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    <div className="App m-10">
      <br />

      <ReactFlagsSelect
        selected={select}
        onSelect={onSelect}
        countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
        /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
      />
      <br />

      <div className="react-tel-input flag "></div>
    </div>
  );
}
