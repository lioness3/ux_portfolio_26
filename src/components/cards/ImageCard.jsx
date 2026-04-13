import "../../styles/cards/imageCard.css";

export default function ImageCard({ images, descriptions, intro }) {
  // used to determine if there is 0 or mor ethan 1 image in the images array. used for css style class name
  const isSingle = images.length === 1;

  // No images  fallback
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="image-card empty">
        <p>No images available.</p>
      </div>
    );
  }

  return (
    <div className="image-card ">
      {intro && <p className="image-card-intro">{intro}</p>}

      <div className={` ${isSingle ? "single" : "multiple"}`}>
        {images.map((img, index) => (
          <figure key={index} className="image-card-item">
            <img src={img} alt="" />
            <figcaption className="image-card-caption">
              {descriptions[index] || ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
