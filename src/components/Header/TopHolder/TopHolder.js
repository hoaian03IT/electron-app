import PropTypes from "prop-types";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react";
// import { useSpring, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "./TopHolder.module.scss";
import CartWrapper from "~/components/Popper";
import { CartMenu } from "./CartMenu";
const cx = classNames.bind(styles);

function TopHolder({ address, timeWork, phone, numberBoughtProduct, scroll }) {
  return (
    <div
      className={cx("wrapper", {
        scroll,
      })}
    >
      <div className={cx("inner")}>
        <div className={cx("body")}>
          <div className={cx("location-and-timeWork")}>
            <div className={cx("info-right")}>
              <FontAwesomeIcon
                className={cx("icon-right")}
                icon={faLocationDot}
              />
              <span className={cx("label-right")}>{address}</span>
            </div>
            <div className={cx("info-right")}>
              <FontAwesomeIcon className={cx("icon-right")} icon={faClock} />
              <span className={cx("label-right")}>{timeWork}</span>
            </div>
          </div>
          <div className={cx("phone-and-cart")}>
            <div className={cx("info-left")}>
              <a href={"tel:" + phone}>
                <FontAwesomeIcon
                  className={cx("icon-left", "phone")}
                  icon={faPhone}
                />
              </a>
              <span className={cx("phone-number")}>
                <a className={cx("to-number")} href={"tel:" + phone}>
                  {phone}
                </a>
              </span>
            </div>
            <HeadlessTippy
              interactive
              delay={[200, 500]}
              animation={false}
              placement="bottom-end"
              offset={[-10, 18]}
              hideOnClick={false}
              render={(attrs) => (
                <CartWrapper>
                  <CartMenu {...attrs} />
                </CartWrapper>
              )}
            >
              <div className={cx("info-left")}>
                <FontAwesomeIcon
                  className={cx("icon-left", "cart")}
                  icon={faCartShopping}
                />
                <span className={cx("number-bought-product")}>
                  {numberBoughtProduct}
                </span>
              </div>
            </HeadlessTippy>
          </div>
        </div>
      </div>
    </div>
  );
}

TopHolder.propTypes = {
  address: PropTypes.string.isRequired,
  timeWork: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  numberBoughtProduct: PropTypes.string.isRequired,
};

export default TopHolder;
