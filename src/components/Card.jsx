const Card = ({ item }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w342";

  return (
    <div className="card">
      <img
        src={`${IMAGE_BASE_URL}${item.poster_path}`}
        alt={item.title || item.name}
      />
      <h3>{item.title || item.name}</h3>
      <p>Lingua: {item.original_language}</p>
      <p>Voto: {Math.ceil(item.vote_average / 2)} ⭐</p>
    </div>
  );
};

export default Card;
