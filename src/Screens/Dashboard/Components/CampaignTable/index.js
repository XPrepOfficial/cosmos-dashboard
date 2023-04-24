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
            <Tag color={color} key={new Date() + status}>
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
    key: "2",
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
    key: "3",
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
    key: "4",
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
    key: "5",
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
    key: "6",
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
    key: "7",
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
    key: "8",
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
    key: "9",
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
    key: "10",
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
    key: "11",
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
    key: "12",
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
    key: "13",
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
    key: "14",
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
    key: "15",
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
