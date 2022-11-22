import { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CartMenu.module.scss";
import MenuList from "./MenuList";
import Button from "~/components/Button";
import { DataProductInCart } from "../../Header";

const cx = classNames.bind(styles);

function CartMenu({ ...attrs }) {
  const [data, setData] = useState(useContext(DataProductInCart));

  const handleDeleProduct = (e) => {
    const indexDelete =
      Number(e.target.parentElement.getAttribute("index")) ||
      Number(e.target.getAttribute("index"));

    setData((prev) => prev.filter((item) => item.id !== indexDelete));
  };

  const totalPrice = data.reduce((acc, value) => {
    return acc + Number(value.currentPrice);
  }, 0);

  return (
    <div className={cx("menu-cart")} tabIndex="-1" {...attrs}>
      <h2 className={cx("label")}>Shopping Cart</h2>
      <MenuList data={data} onClick={handleDeleProduct} />
      <div className={cx("total")}>
        <h2 className={cx("total-title")}>
          Total: <span className={cx("total-title")}>${totalPrice}</span>
        </h2>
        <Button className={cx("btn-submit")} to="#" primary>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartMenu;
