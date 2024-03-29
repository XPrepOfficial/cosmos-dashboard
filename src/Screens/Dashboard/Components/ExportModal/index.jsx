import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Select } from "antd";
import DateFilter from "../DateFilter";
import { selectOrgActionCreators } from "../../../../actions/selectOrgActions";
import { exportReportActionCreators } from "../../../../actions/exportReportActions";
import { selectOrgLimit } from "../../../../utils/helper";
import "./ExportModal.css";

const ExportModal = ({ onClose, journeyId }) => {
  const searchObj = useRef({
    flag: true,
    searchValue: "",
  });
  const dispatch = useDispatch();
  const selectOrgDetails = useSelector((state) => state.selectOrgDetails);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleExportReport = () => {
    dispatch(
      exportReportActionCreators.exportReport({
        orgIds: selectedOrgValue[0]?.value === "ALL" ? [] : selectedOrgValue,
        startDate: dateSelected[0],
        endDate: dateSelected[1],
        journeyId,
        isAllOrgSelected: selectedOrgValue[0]?.value === "ALL",
      })
    );
    onClose(true);
  };

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
    setDateSelected(datesArr);
  };

  const handleOrgSearch = (val) => {
    searchObj.current.searchValue = val;
    if (searchObj.current.flag) {
      dispatch(selectOrgActionCreators.setLoading());
      searchObj.current.flag = false;
      setTimeout(() => {
        searchObj.current.flag = true;
        setOrgOffset(0);
        dispatch(
          selectOrgActionCreators.getSelectOrgData({
            journeyId,
            limit: selectOrgLimit,
            offset: 0,
            searchParam: searchObj.current.searchValue,
          })
        );
      }, 3000);
    }
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
            searchParam: searchObj.current.searchValue,
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
        onOk={() => handleExportReport()}
        onCancel={() => onClose()}
        okText={"Export"}
        className="export-modal-container"
        okButtonProps={{
          disabled: !(selectedOrgValue.length > 0 && dateSelected.length),
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
              key="key"
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
