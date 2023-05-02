import { Table, Tag } from "antd";
import "./CampaignTable.css";

const campaignTableCols = [
  {
    title: "Campaign Name",
    dataIndex: "campaignName",
    key: "campaignName",
    filterSearch: true,
  },
  {
    title: "Channel",
    dataIndex: "channel",
    key: "channel",
    filterSearch: true,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    filterSearch: true,
    render: (_, { status }) => <Tag color="blue">{status.toUpperCase()}</Tag>,
  },
  {
    title: "Sent",
    dataIndex: "sent",
    key: "sent",
    filterSearch: true,
  },
  {
    title: "Delivered",
    dataIndex: "delivered",
    key: "delivered",
    filterSearch: true,
  },
  {
    title: "Unique clicks",
    dataIndex: "uniqueClicks",
    key: "uniqueClicks",
    filterSearch: true,
  },
  {
    title: "Unique conversions",
    dataIndex: "uniqueConversions",
    key: "uniqueConversions",
    filterSearch: true,
  },
  {
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
    filterSearch: true,
  },
];

const CampaignTable = ({ campaignsTableData }) => (
  <Table
    columns={campaignTableCols}
    dataSource={campaignsTableData.data}
    pagination={{ position: ["bottomCenter"] }}
  />
);
export default CampaignTable;
