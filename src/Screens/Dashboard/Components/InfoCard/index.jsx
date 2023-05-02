import { Badge, Space } from "antd";
import { Card } from "antd";
import "./InfoCard.css";

const { Meta } = Card;

const CardsColorMap = {
  ENTRIES: "pink",
  EXITS: "volcano",
  "IN JOURNEY": "gold",
  SENT: "lime",
  DELIVERED: "orange",
  CLICKS: "geekblue",
  CONVERSIONS: "green",
  REVENUE: "cyan",
};

const InfoCard = ({ journeyCardData }) => (
  <div className="info-card-container">
    {journeyCardData?.data.map((card) => (
      <Card
        key={card.cardName}
        style={{ width: 300, marginTop: 16 }}
        loading={journeyCardData?.isLoading}
      >
        <Meta
          avatar={
            <Space direction="vertical">
              <Badge
                color={CardsColorMap[card.cardName] || "black"}
                size={240}
              />
            </Space>
          }
          title={card.cardName}
          description={card.cardCount}
        />
      </Card>
    ))}
  </div>
);

export default InfoCard;
