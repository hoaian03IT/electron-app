import classNames from "classnames/bind";
import styles from "./Services.module.scss";

const cx = classNames.bind(styles);

function Services() {
  return (
    <div className={cx("wrapper")}>
      <h1>Services Page</h1>
    </div>
  );
}

export default Services;
