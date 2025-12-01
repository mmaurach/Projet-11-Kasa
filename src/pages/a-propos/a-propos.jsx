import "./a-propos.scss";
import BannerImage from "../../components/banner/banner";
import bannerimg from "../../assets/banner-a-propos.png";
import { aboutList } from "../../data/a-propos.js";
import Collapse from "../../components/collapse/collapse";

function Propos() {
  return (
    <main className="propos-wrapper">
      <BannerImage imageSrc={bannerimg} imageAlt="Banner à propos" text="" />
      <div className="collapse-wrapper">
        {aboutList.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            content={item.content}
            defaultOpen={item.isShown}
          />
        ))}
      </div>
    </main>
  );
}

export default Propos;
