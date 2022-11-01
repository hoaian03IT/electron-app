import classNames from "classnames/bind";
import styles from "./Prices.module.scss";

const cx = classNames.bind(styles);

function Prices() {
  return (
    <div className={cx("wrapper")}>
      <h1>Prices Page</h1>
    </div>
  );
}

export default Prices;
