import s from "./LoadMoreBtn.module.css"
function LoadMoreBtn({ handleClick }) {
  return (
    <div className={s.box}>
      <button onClick={handleClick}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn