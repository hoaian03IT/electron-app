import { faBolt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Button from "~/components/Button";

import styles from "./SecondContent.module.scss";

const cx = classNames.bind(styles);

function SecondContent({ onClick }) {
  return (
    <div className={cx("wrapper")}>
      <img src={images.backgroundSecondContent} alt="" />
      <div className={cx("description")}>
        <h4 className={cx("title")}>
          Do you <strong>Need Help</strong> With Electrical Maintenance?
        </h4>
        <p className={cx("passage")}>
          Our electrical repair and service options are proudly offered to
          clients. Give us a call today to schedule a free service estimate!
        </p>
        <div className={cx("btn")}>
          <Button
            primary
            href="tel:1(800)7654321"
            iconLeft={<FontAwesomeIcon icon={faPhone} />}
          >
            Give Us a Call
          </Button>
          <Button
            extra
            iconLeft={<FontAwesomeIcon icon={faBolt} />}
            onClick={onClick}
          >
            Free Estimate
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
