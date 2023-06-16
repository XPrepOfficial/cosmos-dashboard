import React, { useEffect, useState } from "react";
import "./styles.css";
import { Layout, Menu, theme, Card, Select, Tooltip } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  StarOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userActionCreators } from "../../actions/userActions";
import ReactEcharts from "echarts-for-react";

const { Content, Footer, Sider } = Layout;

const Events = (props) => {
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
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    color: ["#fd578d"],
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
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

export default Events;
