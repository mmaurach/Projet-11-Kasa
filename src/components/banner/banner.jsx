import "./banner.scss";

function BannerImage({ imageSrc, imageAlt, text }) {
  return (
    <div className="banner-wrapper">
      <div className="banner-inner">
        <img className="banner-img" alt={imageAlt} src={imageSrc} />
      </div>
      <h1 className="banner-txt">{text}</h1>
    </div>
  );
}

export default BannerImage;
