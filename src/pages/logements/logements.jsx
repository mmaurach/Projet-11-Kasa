import "./logements.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../../data/logements.json";
import Carrousel from "../../components/carrousel/carrousel";
import Tags from "../../components/tags/tags";
import HostRating from "../../components/host-rating/host-rating";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = data.find((item) => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/404");
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <main className="logements-wrapper">
      <Carrousel pictures={logement.pictures} />
      <div className="logement-host-container">
        <div className="logement-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="tags-wrapper">
            {logement.tags.map((tag, index) => (
              <Tags key={index} text={tag} />
            ))}
          </div>
        </div>
        <div className="host-wrapper">
          <HostRating host={logement.host} rating={logement.rating} />
        </div>
      </div>
    </main>
  );
}

export default Logement;
