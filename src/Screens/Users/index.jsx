import { useEffect, useState } from "react";
import "./styles.css";
import { Layout, Card, Select, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userActionCreators } from "../../actions/userActions";
import ReactEcharts from "echarts-for-react";

const { Content } = Layout;

const Users = () => {
  const dispatch = useDispatch();
  const { graphCardData } = useSelector((state) => state.userDetails);
  const [graphActivityType, setGraphActivityType] = useState("MAU");
  useEffect(() => {
    dispatch(userActionCreators.fetchGraphCardsData());
    dispatch(
      userActionCreators.fetchGraphData({
        type: graphActivityType,
        startDate: "2023-06-07",
        endDate: "2023-06-13",
      })
    );
  }, [graphActivityType]);
  const options = {
    title: {
      text: "Activity (MAU, WAU, DAU)",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      orient: "vertical",
      right: 0,

      top: "middle",
      data: ["Overall", "Web", "Android", "Ios"],
    },
    grid: {
      left: "3%",
      right: "14%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Overall",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Web",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Android",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Ios",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
    ],
  };
  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
      }}
    >
      <div
        style={{
          padding: "24px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {graphCardData?.map((data) => {
          return (
            <>
              <Card style={{ width: 300 }}>
                <p>
                  {data.title}{" "}
                  <Tooltip title={data.info}>
                    <span>
                      <InfoCircleOutlined />
                    </span>
                  </Tooltip>
                </p>
                <p>{data.count}</p>
                <p>{data.perc}</p>
                {data.stats.map((data) => {
                  return (
                    <>
                      <p>
                        {data.key} {data.value}
                      </p>
                    </>
                  );
                })}
              </Card>
            </>
          );
        })}
      </div>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: "white",
        }}
      >
        <div
          style={{
            position: "relative",
            top: 30,
            marginRight: 40,
            display: "flex",
            justifyContent: "flex-end",
            zIndex: 1,
          }}
        >
          <Select
            defaultValue="Last 30 days"
            style={
              {
                //   width: 120,
              }
            }
            bordered={false}
            options={[
              {
                value: "Last 7 days",
                label: "Last 7 days",
              },
              {
                value: "Last 30 days",
                label: "Last 30 days",
              },
            ]}
          />
          <Select
            value={graphActivityType}
            onChange={(value) => setGraphActivityType(value)}
            style={
              {
                //   width: 120,
              }
            }
            bordered={false}
            options={[
              {
                value: "MAU",
                label: "MAU",
              },
              {
                value: "DAU",
                label: "DAU",
              },
              {
                value: "WAU",
                label: "WAU",
              },
            ]}
          />
        </div>
        <ReactEcharts option={options} />
      </div>
    </Content>
  );
};

export default Users;
