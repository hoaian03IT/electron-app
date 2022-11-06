import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./FirstContent.module.scss";
import Item from "./ItemFirstContent";

const cx = classNames.bind(styles);

function FirstContent({ data }) {
  return (
    <div className={cx("content")}>
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
}

FirstContent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FirstContent;
