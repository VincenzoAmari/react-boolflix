import React from "react";

const Card = ({ item }) => {
  const imgUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  const languageMap = {
    en: "gb", //  Regno Unito
    ja: "jp", //  Giappone
    zh: "cn", //  Cina
    ko: "kr", //  Corea del Sud
    es: "es", //  Spagna
    fr: "fr", //  Francia
    de: "de", //  Germania
    ru: "ru", //  Russia
    hi: "in", //  India
  };

  const languageCode = item.original_language
    ? item.original_language.toLowerCase()
    : "xx";
  const flagCode = languageMap[languageCode] || languageCode;
  const flagUrl = `https://flagcdn.com/w40/${flagCode}.png`;

  const voteStars = Math.round(item.vote_average / 2); // Converte il voto da 1-10 a 1-5 stelle

  return (
    <div className="movie-card">
      <img src={imgUrl} alt={item.title || item.name} />

      <div className="info">
        <div className="details">
          <img className="flag" src={flagUrl} alt={item.original_language} />
          <h3>{item.title || item.name}</h3>
          <p className="original-title">
            Titolo originale: {item.original_title || item.name}
          </p>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < voteStars ? "filled" : ""}>
                ★
              </span>
            ))}
          </div>
          <p className="overview">
            {item.overview
              ? item.overview.slice(0, 100) + "..."
              : "Nessuna descrizione disponibile."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
