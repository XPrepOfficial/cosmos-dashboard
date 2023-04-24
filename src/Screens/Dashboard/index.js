// import ExportReport from "./Components/ExportReport";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { Button } from "antd";
import ExportModal from "./Components/ExportModal";
import InfoCard from "./Components/InfoCard";
import CampaignTable from "./Components/CampaignTable";
import DateFilter from "./Components/DateFilter";
import "./Dashboard.css";

const items = [
  {
    key: "1",
    label: `Campaigns Table View`,
    children: <CampaignTable />,
  },
  {
    key: "2",
    label: `Campaigns Chart`,
    children: "",
  },
];

const Dashboard = () => {
  const [isExportModal, setIsExportModal] = useState(false);

  const handleExportModalClose = () => {
    setIsExportModal(false);
  };

  const handleDatesSelected = (dates) => {
    console.log("date filter", dates)
  }

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
          <DateFilter handleDatesSelected={handleDatesSelected}/>
        </div>
        <div className="dashboard-content">
          <InfoCard />
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
      {isExportModal ? <ExportModal onClose={handleExportModalClose} /> : null}
    </>
  );
};

export default Dashboard;
