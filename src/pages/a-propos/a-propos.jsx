import BannerImage from "../../components/banner/banner";
import bannerimg from "../../assets/banner-a-propos.png";

function Propos() {
  return (
    <main className="propos-wrapper">
      <BannerImage imageSrc={bannerimg} imageAlt="Banner à propos" text="" />
      <div className="collapse-wrapper"></div>
    </main>
  );
}

export default Propos;
