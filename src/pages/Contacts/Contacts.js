import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";

const cx = classNames.bind(styles);

function Contacts() {
  return (
    <div className={cx("wrapper")}>
      <h1>Contacts Page</h1>
    </div>
  );
}

export default Contacts;
