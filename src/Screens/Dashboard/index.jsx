// import ExportReport from "./Components/ExportReport";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, message, Tabs } from "antd";
import { dashboardActionCreators } from "../../actions/dashboardActions";
import { selectOrgActionCreators } from "../../actions/selectOrgActions";
import { CampaignTableLimit, GetDatesDaysAgo } from "../../utils/helper";
import CampaignTable from "./Components/CampaignTable";
import DateFilter from "./Components/DateFilter";
import ExportModal from "./Components/ExportModal";
import InfoCard from "./Components/InfoCard";
import "./Dashboard.css";

const Dashboard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const journeyCardData = useSelector(
    (state) => state?.dashboardDetails?.journeyCard
  );
  const campaignsTableData = useSelector(
    (state) => state?.dashboardDetails?.campaignsTable
  );
  const exportReportDetails = useSelector((state) => state.exportReport);
  const dateFilter = useRef(GetDatesDaysAgo(30));
  const hideExportLoadingMessage = useRef();
  const defaultPage = useRef(1);
  const [isExportModal, setIsExportModal] = useState(false);

  useEffect(() => {
    let param = {
      startDate: dateFilter.current[0],
      endDate: dateFilter.current[1],
      journeyId: params?.id,
      limit: CampaignTableLimit,
      offset: 0,
    };
    dispatch(dashboardActionCreators.getJourneyCardData(param));
    dispatch(dashboardActionCreators.getCampaignsTableData(param));
    dispatch(selectOrgActionCreators.resetOrgData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (exportReportDetails.isLoading) {
      hideExportLoadingMessage.current = messageApi.open({
        type: "loading",
        content: "Exporting Report..",
        duration: 0,
      });
    } else {
      if (typeof hideExportLoadingMessage.current === "function") {
        hideExportLoadingMessage.current();
        messageApi.open({
          type: exportReportDetails.errorMessage ? "error" : "success",
          content: exportReportDetails.errorMessage
            ? `ERROR : ${exportReportDetails.errorMessage}`
            : "Report exported successfully",
          duration: 3,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exportReportDetails.isLoading]);

  const handleCamapignTablePageChange = (pageNumber) => {
    let offset = (pageNumber - 1) * CampaignTableLimit;
    defaultPage.current = pageNumber;
    dispatch(
      dashboardActionCreators.getCampaignsTableData({
        startDate: dateFilter.current[0],
        endDate: dateFilter.current[1],
        journeyId: params?.id,
        limit: CampaignTableLimit,
        offset,
      })
    );
  };

  const handleExportModalClose = () => {
    setIsExportModal();
  };

  const handleDatesSelected = (dateArr) => {
    dateFilter.current = dateArr;
    let param = {
      startDate: dateArr[0],
      endDate: dateArr[1],
      journeyId: params?.id,
      limit: CampaignTableLimit,
      offset: 0,
    };
    defaultPage.current = 1;
    dispatch(dashboardActionCreators.getJourneyCardData(param));
    dispatch(dashboardActionCreators.getCampaignsTableData(param));
  };

  return (
    <>
      <div className="dashboard-container">
        {contextHolder}
        <div className="dashboard-actions">
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size={"large"}
            onClick={() => setIsExportModal(true)}
            loading={exportReportDetails.isLoading}
          >
            Export report
          </Button>
          <DateFilter
            handleDatesSelected={handleDatesSelected}
            defaultVal="last30"
          />
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
                  <CampaignTable
                    handleCamapignTablePageChange={
                      handleCamapignTablePageChange
                    }
                    campaignsTableData={campaignsTableData}
                    defaultPage={defaultPage.current}
                  />
                ),
              },
            ]}
          />
        </div>
      </div>
      {isExportModal ? (
        <ExportModal journeyId={params?.id} onClose={handleExportModalClose} />
      ) : null}
    </>
  );
};

export default Dashboard;
