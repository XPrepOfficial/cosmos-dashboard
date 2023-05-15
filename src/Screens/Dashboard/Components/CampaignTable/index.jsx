import { Table, Tag } from "antd";
import { CampaignTableLimit } from "../../../../utils/helper";
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
    render: (_, { status }) => <Tag color="blue">{status.toUpperCase()}</Tag>,
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

const CampaignTable = ({
  campaignsTableData,
  handleCamapignTablePageChange,
  defaultPage,
}) => (
  <Table
    // rowKey={(record) => record?.campaignId || record?.campaignName}
    columns={campaignTableCols}
    dataSource={campaignsTableData?.data?.campaignList}
    pagination={{
      total: campaignsTableData?.data?.totalCampaigns,
      position: ["bottomCenter"],
      onChange: (pageNumber) => {
        handleCamapignTablePageChange(pageNumber);
      },
      pageSize: CampaignTableLimit,
      current: defaultPage,
      showTotal: (total) => `Total ${total} items`,
    }}
    loading={campaignsTableData.isLoading}
  />
);
export default CampaignTable;
