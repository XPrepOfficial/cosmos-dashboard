import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import JourneysTable from "./components/JourneyTable";
import { journeyActionCreators } from "../../actions/journeyActions";
import { JourneyTableLimit } from "../../utils/helper";

const Journey = () => {
  const dispatch = useDispatch();
  const journeyDetails = useSelector((state) => state.journeyDetails);

  useEffect(() => {
    dispatch(
      journeyActionCreators.getJourneyData({
        limit: JourneyTableLimit,
        offset: 0,
      })
    );
  }, []);

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
                handleJourneyTablePageChange={handleJourneyTablePageChange}
                journeyDetails={journeyDetails}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Journey;
