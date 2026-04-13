// Mini block to render on the cards that uses the color palette as the background
import "../../styles/cards/blockCard.css";
export default function BlockCardList({
  item,
  bgColor,
  feedback = false,
  quote = "",
}) {
  if (feedback == true) {
    return (
      <div
        className="block-card feedback-block"
        style={{ backgroundColor: bgColor }}
      >
        <p className="block-card-feedback">{quote}</p>
      </div>
    );
  } else {
    return (
      <div className="block-card" style={{ backgroundColor: bgColor }}>
        <h3 className="block-card-title">{item.title}</h3>
        <p className="block-card-description">{item.description}</p>
      </div>
    );
  }
}
