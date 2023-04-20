import { Avatar, Card } from "antd";
import "./InfoCard.css";

const { Meta } = Card;

const cardMap = [
  { title: "Entries", value: "46,984,117" },
  { title: "Exits", value: "46,984,117" },
  { title: "In Journeys", value: "46,984,117" },
  { title: "Sent", value: "46,984,117" },
  { title: "Delivered", value: "46,984,117" },
  { title: "Clicks", value: "46,984,117" },
  { title: "Conversions", value: "46,984,117" },
  { title: "Revenue", value: "46,984,117" },
];

const InfoCard = () => (
  <div className="info-card-container">
    {cardMap.map((card) => (
      <Card style={{ width: 300, marginTop: 16 }} loading={false}>
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          }
          title={card.title}
          description={card.value}
        />
      </Card>
    ))}
  </div>
);

export default InfoCard;
