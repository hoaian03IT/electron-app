import classNames from "classnames/bind";
import Header from "~/components/Header";
import styles from "./AboutUs.module.scss";

const cx = classNames.bind(styles);

function AboutUs() {
  return (
    <div className={cx("wrapper")}>
      <Header />
    </div>
  );
}

export default AboutUs;
