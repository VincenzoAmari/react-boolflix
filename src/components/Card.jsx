import React from "react";

const Card = ({ item }) => {
  const imgUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  const languageFlag =
    item.original_language === "it"
      ? "🇮🇹"
      : item.original_language === "en"
      ? "🇬🇧"
      : "🏳️"; // Bandiera generica se non esiste una bandiera per la lingua

  const voteStars = Math.round(item.vote_average / 2); // Converte il voto da 1-10 a 1-5 stelle

  return (
    <div className="movie-card">
      <img src={imgUrl} alt={item.title || item.name} />

      {/* La parte che viene mostrata al passaggio del mouse */}
      <div className="info">
        <div className="details">
          <p className="language">{languageFlag}</p>
          <h3>{item.title || item.name}</h3>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < voteStars ? "filled" : ""}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
