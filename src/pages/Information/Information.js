import classNames from "classnames/bind";
import styles from "./Information.module.scss";

const cx = classNames.bind(styles);

function Information() {
  return (
    <div className={cx("wrapper")}>
      <h1>Information Page</h1>
    </div>
  );
}

export default Information;
