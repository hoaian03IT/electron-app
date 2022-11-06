import classNames from "classnames/bind";
import styles from "./CartMenu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function MenuList({ data }) {
  return (
    <div className={cx("list")}>
      {data.length > 0 ? (
        data.map((data, index) => <MenuItem key={index} data={data} />)
      ) : (
        <img
          className={cx("no-product")}
          src="https://dlinkmea.com/images/no-product.png"
          alt="no products"
        />
      )}
    </div>
  );
}

export default MenuList;
