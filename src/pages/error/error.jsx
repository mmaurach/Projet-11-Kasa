import "./error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="error-wrapper">
      <h1 className="error-404">404</h1>
      <div className="error-oups">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link className="error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
