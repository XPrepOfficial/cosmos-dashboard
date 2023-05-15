import { Table, Tag, Input } from "antd";
import { JourneyTableLimit, StatusColorMap } from "../../../../utils/helper";
import "./JourneyTable.css";

const JourneysTable = ({
  journeyDetails,
  handleJourneyTablePageChange,
  navigateDashboard,
  handleJourneyNameSearch,
  defaultPage,
}) => {
  const { Search } = Input;
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
    <>
      <Search
        style={{ width: "25%", float: "right", marginBottom: "10px" }}
        placeholder="Search by journey name"
        onChange={handleJourneyNameSearch}
        loading={journeyDetails?.searchLoading}
      />
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
          showTotal: (total) => `Total ${total} items`,
          current: defaultPage,
        }}
      />
    </>
  );
};
export default JourneysTable;
