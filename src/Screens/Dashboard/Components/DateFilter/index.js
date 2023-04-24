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

const DateFilter = ({handleDatesSelected}) => {
  const [isCustomSelected, setIsCustomSelected] = useState(false);

  const onDatesChange = (_, dateString) => {
    handleDatesSelected(`${dateString[0]}-${dateString[1]}`)
  };

  const handleChange = (value) => {
    if (value === "custom") {
      setIsCustomSelected(true);
      handleDatesSelected("");
    } else {
        handleDatesSelected(value);
      setIsCustomSelected(false);
    }
  };

  const disableDates = (current) => {
    return current && current.valueOf() >= Date.now();
  }

  return (
    <div
      className={`${
        isCustomSelected
          ? "date-filter-container-grid"
          : "date-filter-container"
      }`}
    >
      <Select style={{"width": "100%"}} placeholder="Select Date" options={options} onChange={handleChange} />
      {isCustomSelected ? <RangePicker onChange={onDatesChange} disabledDate={disableDates}/> : null}
    </div>
  );
};

export default DateFilter;
