import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import { Select } from "antd";
import DateFilter from "../DateFilter";
import { selectOrgActionCreators } from "../../../../actions/selectOrgActions";
import "./ExportModal.css";

const ExportModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const selectOrgDetails = useSelector((state) => state.selectOrgDetails);
  const [orgOptions, setOrgOptions] = useState(selectOrgDetails.data);
  const [dateSelected, setDateSelected] = useState("");
  const [selectedOrgValue, setSelectedOrgValue] = useState([]);
  const ids = [];
  const options = [];

  useEffect(() => {
    dispatch(
      selectOrgActionCreators.getSelectOrgData({ journeyId: "12ewasdajb" })
    );
  }, []);

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
    if (value.includes("ALL")) {
      setSelectedOrgValue([
        {
          label: "Select All",
          value: "ALL",
        },
      ]);
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
        okButtonProps={{
          disabled: !(selectedOrgValue.length > 0 && dateSelected),
        }}
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
              loading={selectOrgDetails.isLoading}
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
