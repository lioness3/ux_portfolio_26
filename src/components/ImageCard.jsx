import "../styles/imageCard.css";
export default function ImageCard({ images, descriptions }) {
  console.log("====================================");
  console.log(images, descriptions, "here");
  console.log("====================================");
  const isSingle = images.length === 1;
  // If images is missing, null, or empty → render nothing (or a fallback)
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="image-card empty">
        {/* optional fallback */}
        <p>No images available.</p>
      </div>
    );
  }
  return (
    <div className={`image-card ${isSingle ? "single" : "multiple"}`}>
      {images.map((img, index) => (
        <figure key={index} className="image-card-item">
          <img src={img} alt="" />

          {descriptions[index] && (
            <figcaption className="image-card-caption">
              {descriptions[index]}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
