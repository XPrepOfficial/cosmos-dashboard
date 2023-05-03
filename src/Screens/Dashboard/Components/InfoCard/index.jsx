import { Badge, Skeleton, Space, Card } from "antd";
import { DummyArray8, CardsColorMap } from "../../../../utils/helper";
import "./InfoCard.css";

const { Meta } = Card;

const SkeletonCard = () => {
  return (
    <div className="info-card-container">
      {DummyArray8.map((ele) => (
        <Card key={ele} style={{ width: 300, marginTop: 16 }}>
          <Skeleton loading={true} avatar active>
            <Meta title="" />
          </Skeleton>
        </Card>
      ))}
    </div>
  );
};

const InfoCard = ({ journeyCardData }) => {
  if (!journeyCardData?.data?.length) {
    return <SkeletonCard />;
  }
  return (
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
};

export default InfoCard;
