// import ExportReport from "./Components/ExportReport";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import InfoCard from "./Components/InfoCard";
import CampaignTable from "./Components/CampaignTable";
import "./Dashboard.css";

const Dashboard = () => (
  <div className="dashboard-container">
    <Button type="primary" icon={<DownloadOutlined />} size={"large"}>
      Export report
    </Button>
    <div className="dashboard-content">
      <InfoCard />
      <CampaignTable />
    </div>
  </div>
);

export default Dashboard;
