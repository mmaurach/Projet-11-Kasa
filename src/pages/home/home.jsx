import BannerImage from "../../components/banner/banner";
import bannerimg from "../../assets/banner.png";

function Home() {
  return (
    <div className="home-wrapper">
      <BannerImage
        imageSrc={bannerimg}
        imageAlt="Banner à propos"
        text="Chez-vous, partout et ailleurs"
      />
    </div>
  );
}

export default Home;
