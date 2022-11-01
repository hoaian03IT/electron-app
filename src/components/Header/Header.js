import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import NavigationBar from "./NavigationBar";
import TopHolder from "./TopHolder";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <TopHolder
        address="8494 Signal Hill Road Manassas, VA, 20110"
        timeWork="Mon-Fri 08:00 AM - 05:00 PM"
        phone="1 (800) 765-43-21"
        numberBoughtProduct="4"
      />

      <NavigationBar />
    </header>
  );
}

export default Header;
