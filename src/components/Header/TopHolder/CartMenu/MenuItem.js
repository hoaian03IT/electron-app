import { Link } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./CartMenu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Link to="/" className={cx("item")}>
      <img className={cx("img")} src={data.src} alt={data.alt} />
      <div className={cx("info")}>
        <p className={cx("title")}>{data.title}</p>
        <span
          className={cx("current-price", {
            highlight: data.oldPrice,
          })}
        >
          ${data.currentPrice}{" "}
          {!!data.oldPrice && (
            <span className={cx("old-price")}>${data.oldPrice}</span>
          )}
        </span>
      </div>
      <FontAwesomeIcon className={cx("delete-btn")} icon={faTrashCan} />
    </Link>
  );
}

export default MenuItem;
