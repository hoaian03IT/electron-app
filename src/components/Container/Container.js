import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

function Container({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
