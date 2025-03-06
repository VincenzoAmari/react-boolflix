import Card from "./Card";

const ResultSection = ({ title, items }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="grid">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ResultSection;
