import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./FirstContent.module.scss";

const cx = classNames.bind(styles);

function ItemFirstContent({ data }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={cx("item")}>
      <div className={cx("background")}>
        <div className={cx("overlay")}></div>
        <img className={cx("image")} src={data.backgroundImage} alt="" />
        <div className={cx("label")}>
          <h2 className={cx("title")}>{data.title}</h2>
          {showDescription && (
            <p className={cx("description")}>{data.description}</p>
          )}
          <Button
            className={cx("show-btn")}
            round
            iconLeft={showDescription ? data.firstIcon : data.secondIcon}
            onClick={() => setShowDescription((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

ItemFirstContent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ItemFirstContent;
