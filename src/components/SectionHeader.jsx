export default function SectionHeader({ tag, tagIcon, title, titleEm, sub }) {
  return (
    <div className="sec-header">
      <div className="sec-tag">
        <i className={`bi ${tagIcon} me-2`} />
        {tag}
      </div>
      <h2 className="sec-title">
        {title} <em>{titleEm}</em>
      </h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  );
}