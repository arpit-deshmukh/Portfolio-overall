export function SectionHeader({ label, title }) {
  return (
    <div className="mb-10">
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
    </div>
  );
}
