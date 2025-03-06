const Card = ({ item }) => {
  const imgUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="movie-card">
      <img src={imgUrl} alt={item.title} />
    </div>
  );
};

export default Card;
