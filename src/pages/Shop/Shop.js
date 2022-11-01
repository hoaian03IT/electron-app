import classNames from "classnames/bind";
import styles from "./Shop.module.scss";

const cx = classNames.bind(styles);

function Shop() {
  return (
    <div className={cx("wrapper")}>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
