import ArrowIcon from '../../assets/icon/ArrowIcon';
import banner from '../../assets/img/banner.png';
import '../style/home.css';

function Hero() {
  return (
    <section className="hero container">
      <div className="hero_info">
        <p className="hero_discount">25% off</p>
        <h1 className="hero_title">Summer Sale</h1>
        <p className="hero_text">Discover our summer styles with discount</p>
        <button className="hero_btn">
          Shop Now{' '}
          <span className="hero_icon">
            <ArrowIcon />
          </span>
        </button>
      </div>
      <div className="heroimg_block">
        <img className="hero_img" src={banner} alt="shoe img" />
      </div>
    </section>
  );
}

export default Hero;
