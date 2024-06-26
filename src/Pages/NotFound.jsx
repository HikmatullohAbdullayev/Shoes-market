import ArrowIcon from '../assets/icon/ArrowIcon';

function NotFound() {
  return (
    <section>
      <h2>404</h2>
      <p>Page not found</p>
      <button className="hero_btn">
        Back to home{' '}
        <span className="hero_icon">
          <ArrowIcon />
        </span>
      </button>
    </section>
  );
}

export default NotFound;
