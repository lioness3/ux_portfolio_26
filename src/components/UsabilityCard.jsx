import "../styles/usabilityCard.css";

export default function UsabilityCard({
  headline,
  intro,
  rounds,
  colorPalette,
}) {
  return (
    <section className="usability-card">
      {headline && <h2 className="usability-headline">{headline}</h2>}
      {intro && <p className="usability-intro">{intro}</p>}

      <div className="usability-rounds">
        {rounds.map((round, index) => (
          <div
            key={index}
            className="usability-block"
            style={{ backgroundColor: colorPalette[index] }}
          >
            <h3 className="usability-round-label">{round.label}</h3>
            <p className="usability-round-subtitle">{round.subtitle}</p>

            <ul className="usability-list">
              {round.items.map((item, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item }}
                  className="usability-item"
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
