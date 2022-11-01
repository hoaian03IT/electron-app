import classNames from "classnames/bind";
import styles from "./Gallery.module.scss";

const cx = classNames.bind(styles);

function Gallery() {
  return (
    <div className={cx("wrapper")}>
      <h1>Gallery Page</h1>
    </div>
  );
}

export default Gallery;
