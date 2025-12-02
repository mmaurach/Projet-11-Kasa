import "./home.scss";
import BannerImage from "../../components/banner/banner";
import bannerimg from "../../assets/banner.png";
import logements from "../../data/logements.json";
import Card from "../../components/card/card";

function Home() {
  return (
    <main className="home-wrapper">
      <BannerImage
        imageSrc={bannerimg}
        imageAlt="Banner Home"
        text="Chez-vous, partout et ailleurs"
      />
      <section className="cards-wrapper">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
