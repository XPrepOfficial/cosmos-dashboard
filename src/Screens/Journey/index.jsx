import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import JourneysTable from "./components/JourneyTable";
import { journeyActionCreators } from "../../actions/journeyActions";
import { JourneyTableLimit } from "../../utils/helper";

const Journey = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const journeyDetails = useSelector((state) => state.journeyDetails);

  useEffect(() => {
    dispatch(
      journeyActionCreators.getJourneyData({
        limit: JourneyTableLimit,
        offset: 0,
      })
    );
  }, []);

  const navigateDashboard = (val) => {
    navigate(`/dashboard/${val}`);
  };

  const handleJourneyTablePageChange = (pageNumber) => {
    let offset = (pageNumber - 1) * JourneyTableLimit;
    dispatch(
      journeyActionCreators.getJourneyData({
        limit: JourneyTableLimit,
        offset: offset,
      })
    );
  };

  return (
    <div className="global-padding">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `List of Journeys`,
            children: (
              <JourneysTable
                // rowKey={(record) => record?.journeyId || record?.journeyId}
                handleJourneyTablePageChange={handleJourneyTablePageChange}
                journeyDetails={journeyDetails}
                navigateDashboard={navigateDashboard}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Journey;
