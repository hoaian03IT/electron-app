import { faBolt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../Button";
import styles from "./ModalVisit.module.scss";

const cx = classNames.bind(styles);

function ModalVisit({ onClick }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("overlay")} onClick={onClick}></div>
      <div className={cx("modal")}>
        <FontAwesomeIcon
          className={cx("btn-close")}
          icon={faXmark}
          onClick={onClick}
        />
        <h2 className={cx("title")}>Make an Appointment</h2>
        <div className={cx("form")}>
          <div className={cx("input-group")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Your Name *"
            />
          </div>
          <div className={cx("input-group")}>
            <input
              className={cx("input")}
              type="email"
              placeholder="Your email address *"
            />
            <input
              className={cx("input")}
              type="text"
              placeholder="Your phone number *"
            />
          </div>
          <div className={cx("input-group")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Address *"
            />
          </div>
          <div className={cx("input-group")}>
            <select className={cx("input")}>
              <option value="Service">Service</option>
              <option value="Service 02">Service 02</option>
              <option value="Service 03">Service 03</option>
              <option value="Service 04">Service 04</option>
              <option value="Service 05">Service 05</option>
            </select>
          </div>
          <div className={cx("input-group")}>
            <input
              className={cx("input", "input--date")}
              type="date"
              placeholder="Date of visit"
            />
          </div>
          <div className={cx("input-group")}>
            <textarea
              className={cx("text-area")}
              placeholder="Your comment"
            ></textarea>
          </div>

          <Button
            primary
            className={cx("btn-submit")}
            iconLeft={<FontAwesomeIcon icon={faBolt} />}
          >
            Explore services
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalVisit;
