import { Table, Tag } from "antd";
import { JourneyTableLimit, StatusColorMap } from "../../../../utils/helper";
import "./JourneyTable.css";

const JourneysTable = ({
  journeyDetails,
  handleJourneyTablePageChange,
  navigateDashboard,
}) => {
  const JourneysTableCols = [
    {
      title: "Journey Name",
      dataIndex: "name",
      key: "journey",
      render: (text, record) => (
        <div>
          <span
            style={{ cursor: "pointer", color: "#2d81f7" }}
            onClick={() => navigateDashboard(record?.journeyId)}
          >
            {text}
          </span>
        </div>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <Tag color={StatusColorMap[status] || "blue"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
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
  return (
    <Table
      loading={journeyDetails?.isLoading}
      columns={JourneysTableCols}
      dataSource={journeyDetails?.data?.journeyList}
      pagination={{
        total: journeyDetails?.data?.totalJourney,
        position: ["bottomCenter"],
        onChange: (pageNumber) => {
          handleJourneyTablePageChange(pageNumber);
        },
        pageSize: JourneyTableLimit,
      }}
    />
  );
};
export default JourneysTable;
