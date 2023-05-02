import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import JourneysTable from "./components/JourneyTable";
import { journeyActionCreators } from "../../actions/journeyActions";

const Journey = () => {
  const dispatch = useDispatch();
  const journeyDetails = useSelector((state) => state.journeyDetails);

  useEffect(() => {
    dispatch(journeyActionCreators.getJourneyData());
  }, []);

  return (
    <div className="global-padding">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `List of Journeys`,
            children: (
              <JourneysTable journeyDetails={journeyDetails} />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Journey;
