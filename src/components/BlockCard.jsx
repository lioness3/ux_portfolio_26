// Mini block to render on the cards that uses the color palette as the background
import "../styles/blockCard.css";
export default function BlockCardList({ item, bgColor }) {
  return (
    <div className="block-card" style={{ backgroundColor: bgColor }}>
      <h3 className="block-card-title">{item.title}</h3>
      <p className="block-card-description">{item.description}</p>
    </div>
  );
}
