import classNames from "classnames/bind";
import styles from "./AboutUs.module.scss";

const cx = classNames.bind(styles);

function AboutUs() {
  return (
    <div className={cx("wrapper")}>
      <h1>AboutUs Page</h1>
    </div>
  );
}

export default AboutUs;
