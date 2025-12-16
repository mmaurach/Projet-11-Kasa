import "./host-rating.scss";
import starActive from "../../assets/star-active.png";
import starInactive from "../../assets/star-inactive.png";

function HostRating({ host, rating }) {
  const [firstName, lastName] = host.name.split(" ");
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="host-rating">
      <div className="host">
        <p className="host-name">
          {firstName}
          <br />
          {lastName}
        </p>

        <img
          src={host.picture}
          alt={`Photo de ${host.name}`}
          className="host-picture"
        />
      </div>

      <div className="rating">
        {stars.map((star) => (
          <img
            key={star}
            src={star <= rating ? starActive : starInactive}
            alt="étoile"
            className="star"
          />
        ))}
      </div>
    </div>
  );
}

export default HostRating;
