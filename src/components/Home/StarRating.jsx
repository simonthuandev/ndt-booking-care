export default function StarRating({ rating, half }) {
  const full = Math.floor(rating);
  return (
    <>
      {Array.from({ length: full }).map((_, i) => (
        <i key={i} className="bi bi-star-fill" />
      ))}
      {half && <i className="bi bi-star-half" />}
    </>
  );
}