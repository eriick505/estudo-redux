import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";

import Loading from "./Helper/Loading";

import styles from "./PhotosLoadMore.module.css";

function PhotosLoadMore() {
  const { page, infinite, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(loadNewPhotos(page + 1));
  }

  if (loading) return <Loading />;
  if (!infinite) return null;
  return (
    <button onClick={handleClick} className={styles.button}>
      +
    </button>
  );
}

export default PhotosLoadMore;
