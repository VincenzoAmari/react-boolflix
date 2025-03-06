import { useRef } from "react";
import Card from "./Card";

const ResultSection = ({ title, items }) => {
  const scrollRef = useRef(null);

  // Scroll con la rotellina del mouse
  const handleScroll = (event) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY * 2;
      event.preventDefault();
    }
  };

  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div ref={scrollRef} onWheel={handleScroll} className="scroll-container">
        {items.length === 0 ? (
          <p>Nessun risultato trovato</p>
        ) : (
          items.map((item) => <Card key={item.id} item={item} />)
        )}
      </div>
    </section>
  );
};

export default ResultSection;
