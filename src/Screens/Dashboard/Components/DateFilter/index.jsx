import { useState } from "react";
import { DatePicker, Select } from "antd";
import { GetDatesDaysAgo } from "../../../../utils/helper";
import "./DateFilter.css";

const { RangePicker } = DatePicker;

const options = [
  { value: "yesterday", label: "Yesterday" },
  { value: "last7", label: "Last 7 days" },
  { value: "last30", label: "Last 30 days" },
  { value: "custom", label: "Custom dates" },
];

const DateFilter = ({ handleDatesSelected, defaultVal }) => {
  const [isCustomSelected, setIsCustomSelected] = useState(false);

  const onDatesChange = (_, dateArr) => {
    handleDatesSelected(dateArr);
  };

  const handleDateOnDays = (daysAgo) => {
    let dateArr = GetDatesDaysAgo(daysAgo);
    handleDatesSelected(dateArr);
    setIsCustomSelected(false);
  };

  const handleChange = (value) => {
    switch (value) {
      case "custom":
        setIsCustomSelected(true);
        break;
      case "yesterday":
        handleDateOnDays(1);
        break;
      case "last7":
        handleDateOnDays(7);
        break;
      case "last30":
        handleDateOnDays(30);
        break;
      default:
        handleDateOnDays(1);
        break;
    }
  };

  const disableDates = (current) => {
    return current && current.valueOf() >= Date.now();
  };

  return (
    <div
      className={`${
        isCustomSelected
          ? "date-filter-container-grid"
          : "date-filter-container"
      }`}
    >
      <Select
        style={{ width: "100%" }}
        placeholder="Select Date"
        options={options}
        onChange={handleChange}
        defaultValue={defaultVal}
      />
      {isCustomSelected ? (
        <RangePicker onChange={onDatesChange} disabledDate={disableDates} />
      ) : null}
    </div>
  );
};

export default DateFilter;
