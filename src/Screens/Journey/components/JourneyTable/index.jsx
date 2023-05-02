import { Table, Tag } from "antd";
import "./JourneyTable.css";

const JourneysTableCols = [
  {
    title: "Journey Name",
    dataIndex: "journey",
    key: "journey",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => <Tag color="blue">{status.toUpperCase()}</Tag>,
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Entries",
    dataIndex: "entries",
    key: "entries",
  },
  {
    title: "Exits",
    dataIndex: "exits",
    key: "exits",
  },
  {
    title: "Last Updated",
    dataIndex: "lastUpdated",
    key: "lastUpdated",
  },
];

const JourneysTable = ({ journeysTableData }) => (
  <Table
    columns={JourneysTableCols}
    dataSource={journeysTableData?.data}
    pagination={{ position: ["bottomCenter"] }}
  />
);
export default JourneysTable;

