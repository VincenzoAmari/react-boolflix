import React from "react";

const languageFlags = {
  en: "🇺🇸",
  it: "🇮🇹",
  es: "🇪🇸",
  unknown: "🌐",
};

const Card = ({ media, type }) => {
  const getFlag = (lang) => {
    return languageFlags[lang] || languageFlags["unknown"];
  };

  const getStars = (vote) => {
    const roundedVote = Math.ceil(vote / 2); // Converte 0-10 in 1-5, arrotondando per eccesso
    return "★".repeat(roundedVote) + "☆".repeat(5 - roundedVote);
  };

  const getPosterUrl = (posterPath) => {
    if (!posterPath) return "";
    return `https://image.tmdb.org/t/p/w342${posterPath}`;
  };

  const title = type === "movie" ? media.title : media.name;
  const originalTitle =
    type === "movie" ? media.original_title : media.original_name;

  return (
    <div className="card">
      <img
        src={getPosterUrl(media.poster_path)}
        alt={`${title} poster`}
        style={{ width: "150px" }}
      />
      <h3>{title}</h3>
      <p>Titolo Originale: {originalTitle}</p>
      <p>Lingua: {getFlag(media.original_language)}</p>
      <p>Voto: {getStars(media.vote_average)}</p>
    </div>
  );
};

export default Card;
