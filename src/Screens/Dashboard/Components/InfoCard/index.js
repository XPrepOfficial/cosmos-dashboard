import { Badge, Space } from "antd";
import { Card } from "antd";
import "./InfoCard.css";

const { Meta } = Card;

const cardMap = [
  { title: "Entries", value: "46,984,117", color: "pink" },
  { title: "Exits", value: "46,984,117", color: "volcano" },
  {
    title: "In Journeys",
    value: "46,984,117",
    color: "gold",
  },
  { title: "Sent", value: "46,984,117", color: "lime" },
  { title: "Delivered", value: "46,984,117", color: "orange" },
  { title: "Clicks", value: "46,984,117", color: "geekblue" },
  { title: "Conversions", value: "46,984,117", color: "green" },
  { title: "Revenue", value: "46,984,117", color: "cyan" },
];

const InfoCard = () => (
  <div className="info-card-container">
    {cardMap.map((card) => (
      <Badge.Ribbon key={card.title} text={card.title} placement="start" color={card.color}>
        <Card style={{ width: 300, marginTop: 16 }} loading={false}>
          <Meta
            avatar={
              <Space direction="vertical">
                <Badge color={card.color} size={240} />
              </Space>
            }
            title={card.title}
            description={card.value}
          />
        </Card>
      </Badge.Ribbon>
    ))}
  </div>
);

export default InfoCard;
