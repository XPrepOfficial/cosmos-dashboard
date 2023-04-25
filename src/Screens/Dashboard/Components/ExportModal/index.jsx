import { useState } from "react";
import { Modal } from "antd";
import { Select } from "antd";
import DateFilter from "../DateFilter";
import "./ExportModal.css";

const ExportModal = ({ onClose }) => {
  const [dateSelected, setDateSelected] = useState("");
  const [selectedOrgValue, setSelectedOrgValue] = useState([]);
  const ids = [];
  const options = [];

  options.push({
    label: "Select All",
    value: "ALL",
  });
  

  for (let i = 0; i < 100000; i++) {
    const value = `${i.toString(36)}${i}`;
    options.push({
      label: value,
      value,
      disabled: i === 10,
    });
    ids.push(value);
  }

  const handleOrgChange = (value) => {
    if(value.includes("ALL")) {
      setSelectedOrgValue([{
        label: "Select All",
        value: "ALL",
      }]);
    } else setSelectedOrgValue(value);
  };

  const handleDatesSelected = (datesArr) => {
      setDateSelected(datesArr[0]);
  };

  return (
    <>
      <Modal
        title="Export Report"
        width={"570px"}
        centered
        open
        onOk={() => onClose()}
        onCancel={() => onClose()}
        okText={"Export"}
        className="export-modal-container"
        okButtonProps={{ disabled: !(selectedOrgValue.length > 0 && dateSelected) }}
      >
        <div className="export-modal-content">
          <div className="export-modal-select">
            <div className="text-14">Select org</div>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Select"
              onChange={handleOrgChange}
              options={options}
              value={selectedOrgValue}
            />
          </div>
          <div className="export-modal-select">
            <div className="text-14">Select date</div>
            <DateFilter handleDatesSelected={handleDatesSelected} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExportModal;
