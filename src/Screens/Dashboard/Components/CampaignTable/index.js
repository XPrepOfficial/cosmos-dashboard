import { Table, Tag } from "antd";
import "./CampaignTable.css";

const campaignTableCols = [
  {
    title: "Campaign Name",
    dataIndex: "campaignName",
    key: "campaignName",
  },
  {
    title: "Channel",
    dataIndex: "channel",
    key: "channel",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((status) => {
          let color = "blue";
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Sent",
    dataIndex: "sent",
    key: "sent",
  },
  {
    title: "Delivered",
    dataIndex: "delivered",
    key: "delivered",
  },
  {
    title: "Unique clicks",
    dataIndex: "uniqueClicks",
    key: "uniqueClicks",
  },
  {
    title: "Unique conversions",
    dataIndex: "uniqueConversions",
    key: "uniqueConversions",
  },
  {
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
  },
];

const data = [
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
  {
    key: "1",
    campaignName: "Sign Up helper journey (Push-1)",
    channel: "push",
    status: ["Running"],
    sent: "43",
    delivered: "50,4321",
    uniqueClicks: "7.72%",
    uniqueConversions: "0.00%",
    revenue: "0",
  },
];

const CampaignTable = () => (
  <Table columns={campaignTableCols} dataSource={data} pagination={{ position: ["bottomCenter"] }}/>
);
export default CampaignTable;
