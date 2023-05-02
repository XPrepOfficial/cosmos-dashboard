// import ExportReport from "./Components/ExportReport";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownloadOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { Button } from "antd";
import ExportModal from "./Components/ExportModal";
import InfoCard from "./Components/InfoCard";
import CampaignTable from "./Components/CampaignTable";
import DateFilter from "./Components/DateFilter";
import { dashboardActionCreators } from "../../actions/dashboardActions";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const journeyCardData = useSelector(
    (state) => state?.dashboardDetails?.journeyCard
  );
  const campaignsTableData = useSelector(
    (state) => state?.dashboardDetails?.campaignsTable
  );
  const [isExportModal, setIsExportModal] = useState(false);

  useEffect(() => {
    let param = {
      startDate: "",
      endDate: "",
      journeyId: "12ewasdajb",
    };
    dispatch(dashboardActionCreators.getJourneyCardData(param));
    dispatch(dashboardActionCreators.getCampaignsTableData(param));
  }, []);

  const handleExportModalClose = () => {
    setIsExportModal(false);
  };

  const handleDatesSelected = (dates) => {
    console.log("date filter", dates);
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-actions">
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size={"large"}
            onClick={() => setIsExportModal(true)}
          >
            Export report
          </Button>
          <DateFilter handleDatesSelected={handleDatesSelected} />
        </div>
        <div className="dashboard-content">
          <InfoCard journeyCardData={journeyCardData} />
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: `Campaigns`,
                children: (
                  <CampaignTable campaignsTableData={campaignsTableData} />
                ),
              },
            ]}
          />
        </div>
      </div>
      {isExportModal ? <ExportModal onClose={handleExportModalClose} /> : null}
    </>
  );
};

export default Dashboard;
