import classNames from "classnames/bind";
import styles from "./FAQ.module.scss";

const cx = classNames.bind(styles);

function FAQ() {
  return (
    <div className={cx("wrapper")}>
      <h1>FAQ Page</h1>
    </div>
  );
}

export default FAQ;
