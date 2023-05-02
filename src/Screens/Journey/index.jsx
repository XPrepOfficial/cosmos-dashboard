import { useEffect } from "react";
import { Tabs } from "antd";
import JourneysTable from "./components/JourneyTable";

const Journey = () => {
  useEffect(() => {}, []);

  return (
    <div className="global-padding">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `List of Journeys`,
            children: <JourneysTable journeyTableData={[]} />,
          },
        ]}
      />
    </div>
  );
};

export default Journey;
