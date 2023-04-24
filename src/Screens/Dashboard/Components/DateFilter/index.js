import React, { useState } from "react";
import { Select } from "antd";
import { DatePicker } from "antd";
import "./DateFilter.css";

const { RangePicker } = DatePicker;

const options = [
  { value: "yesterday", label: "Yesterday" },
  { value: "last7", label: "Last 7 days" },
  { value: "last30", label: "Last 30 days" },
  { value: "custom", label: "Custom dates" },
];

const DateFilter = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isCustomSelected, setIsCustomSelected] = useState(false);
  const [customDateValue, setCusomDateValue] = useState("");

  const onDatesChange = (_, dateString) => {
    // alert("make api call with ", `${dateString[0]}-${dateString[1]}`);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    if (value === "custom") {
      setIsCustomSelected(true);
    } else {
      // other dates selected
    //   alert("make api call with ", value);
      setIsCustomSelected(false);
    }
    console.log(`selected ${value}`);
  };

  return (
    <div
      className={`${
        isCustomSelected
          ? "date-filter-container-grid"
          : "date-filter-container"
      }`}
    >
      <Select style={{"width": "100%"}} placeholder="Select Date" options={options} onChange={handleChange} />
      {isCustomSelected ? <RangePicker onChange={onDatesChange}/> : null}
    </div>
  );
};

export default DateFilter;
