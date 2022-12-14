import { Link } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./CartMenu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <div className={cx("item")}>
      <Link to="/" className={cx("link-item")}>
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
      </Link>
      <FontAwesomeIcon
        index={data.id}
        className={cx("delete-btn")}
        icon={faTrashCan}
        onClick={onClick}
      />
    </div>
  );
}

export default MenuItem;
