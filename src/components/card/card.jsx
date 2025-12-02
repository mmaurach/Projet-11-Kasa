import "./card.scss";
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
    </Link>
  );
}

export default Card;
