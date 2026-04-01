// Mini block to render on the cards
export default function BlockCardList({ items }) {
  return (
    <div className="block-card-list">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="block-card"
          // style={{ backgroundColor: bgColor }}
        >
          <div className="block-card-number">{idx + 1}</div>
          <h4 className="block-card-title">{item.title}</h4>
          <p className="block-card-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
