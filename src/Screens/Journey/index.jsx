import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import JourneysTable from "./components/JourneyTable";
import { journeyActionCreators } from "../../actions/journeyActions";
import { JourneyTableLimit } from "../../utils/helper";

const Journey = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const defaultPage = useRef(1);
  const searchObj = useRef({
    flag: true,
    searchValue: "",
    timer: null,
  });
  const journeyDetails = useSelector((state) => state.journeyDetails);

  useEffect(() => {
    dispatch(
      journeyActionCreators.getJourneyData({
        limit: JourneyTableLimit,
        offset: 0,
        searchParam: searchObj?.current?.searchValue,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateDashboard = (val) => {
    navigate(`/dashboard/${val}`);
  };

  const handleJourneyTablePageChange = (pageNumber) => {
    defaultPage.current = pageNumber;
    let offset = (pageNumber - 1) * JourneyTableLimit;
    dispatch(
      journeyActionCreators.getJourneyData({
        limit: JourneyTableLimit,
        offset: offset,
        searchParam: searchObj?.current?.searchValue,
      })
    );
  };

  const handleJourneyNameSearch = (e) => {
    searchObj.current.searchValue = e?.target?.value;
    if (!searchObj.current.searchValue) {
      if (searchObj.current.timer) {
        clearTimeout(searchObj.current.timer);
        searchObj.current.flag = true;
      }
      dispatch(journeyActionCreators.setSearchLoading());
      dispatch(
        journeyActionCreators.getJourneyData({
          limit: JourneyTableLimit,
          offset: 0,
          searchParam: searchObj.current.searchValue,
        })
      );
    } else if (searchObj.current.flag) {
      searchObj.current.flag = false;
      dispatch(journeyActionCreators.setSearchLoading());
      searchObj.current.timer = setTimeout(() => {
        searchObj.current.flag = true;
        defaultPage.current = 1;
        dispatch(
          journeyActionCreators.getJourneyData({
            limit: JourneyTableLimit,
            offset: 0,
            searchParam: searchObj.current.searchValue,
          })
        );
      }, 3000);
    }
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
                handleJourneyNameSearch={handleJourneyNameSearch}
                defaultPage={defaultPage?.current}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Journey;
