import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import { Select } from "antd";
import DateFilter from "../DateFilter";
import { selectOrgActionCreators } from "../../../../actions/selectOrgActions";
import { selectOrgLimit } from "../../../../utils/helper";
import "./ExportModal.css";

const ExportModal = ({ onClose, journeyId }) => {
  const dispatch = useDispatch();
  const selectOrgDetails = useSelector((state) => state.selectOrgDetails);
  const [orgOptions, setOrgOptions] = useState(selectOrgDetails.data);
  const [dateSelected, setDateSelected] = useState("");
  const [selectedOrgValue, setSelectedOrgValue] = useState([]);
  const [orgOffset, setOrgOffset] = useState(0);

  useEffect(() => {
    dispatch(
      selectOrgActionCreators.getSelectOrgData({
        journeyId,
        limit: selectOrgLimit,
        offset: orgOffset,
      })
    );
  }, []);

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

  const handleOrgSearch = (val) => {
    console.log(val);
  };

  const handleOrgDataScroll = (e) => {
    e.persist();
    let target = e.target;
    if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
      if (
        selectOrgDetails?.data?.totalOrgs >
        selectOrgDetails?.data?.orgList.length
      ) {
        let updatedOffset = orgOffset + 1;
        setOrgOffset(updatedOffset);
        dispatch(
          selectOrgActionCreators.getSelectOrgData({
            journeyId,
            limit: selectOrgLimit,
            offset: updatedOffset * selectOrgLimit,
          })
        );
      }
    }
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
              options={selectOrgDetails?.data?.orgList}
              value={selectedOrgValue}
              loading={selectOrgDetails?.isLoading}
              onSearch={handleOrgSearch}
              onPopupScroll={(e) => handleOrgDataScroll(e)}
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
