import { Modal } from "antd";
import { Select } from "antd";
import DateFilter from "../DateFilter";
import "./ExportModal.css";

const ExportModal = ({ onClose }) => {
  const options = [];

  options.push({
    label: "ALL",
    value: "ALL",
  });

  for (let i = 0; i < 100000; i++) {
    const value = `${i.toString(36)}${i}`;
    options.push({
      label: value,
      value,
      disabled: i === 10,
    });
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
      >
        <div className="export-modal-content">
          <div className="export-modal-select">
            <div className="text-14">Select org</div>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Select"
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="export-modal-select">
            <div className="text-14">Select date</div>
            <DateFilter />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExportModal;
