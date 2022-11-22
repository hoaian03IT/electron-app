import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import routes from "~/config/routes";

import styles from "./BackgroundPathPage.module.scss";

const cx = classNames.bind(styles);

function BackgroundPathPage({ pathCurrent }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("background")} src={images.picSlider1} alt="" />
      <div className={cx("inner")}>
        <div className={cx("path")}>
          <Link className={cx("first-page")} to={routes.home}>
            Home
          </Link>
          <span className={cx("divide")}>/</span>
          <span className={cx("current-page")}>{pathCurrent}</span>
        </div>
      </div>
    </div>
  );
}

export default BackgroundPathPage;
