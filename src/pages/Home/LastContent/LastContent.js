import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import routes from "~/config/routes";

import styles from "./LastContent.module.scss";

const cx = classNames.bind(styles);

function LastContent() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routes.home} className={cx("link")}>
          <img src={images.companyLogo1} alt="" />
        </Link>
        <Link to={routes.home} className={cx("link")}>
          <img src={images.companyLogo2} alt="" />
        </Link>
        <Link to={routes.home} className={cx("link")}>
          <img src={images.companyLogo3} alt="" />
        </Link>
        <Link to={routes.home} className={cx("link")}>
          <img src={images.companyLogo4} alt="" />
        </Link>
        <Link to={routes.home} className={cx("link")}>
          <img src={images.companyLogo5} alt="" />
        </Link>
        <Link to={routes.home} className={cx("link")}>
          <img src={images.companyLogo6} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default LastContent;
