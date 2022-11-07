import { useState, createContext } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import NavigationBar from "./NavigationBar";
import TopHolder from "./TopHolder";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    to: "/home",
    src: "http://websmirno.site/viktor/electron/images/product-01.jpg",
    alt: "",
    title: "Woods WiOn 15 amps Receptacle and USB Charger",
    currentPrice: 41.99,
    oldPrice: 0,
  },
  {
    to: "/home",
    src: "http://websmirno.site/viktor/electron/images/product-02.jpg",
    alt: "",
    title: "Powerboss 3500 watts Gasoline Portable Generator",
    currentPrice: 329.99,
    oldPrice: 342.32,
  },
  {
    to: "/home",
    src: "http://websmirno.site/viktor/electron/images/product/product-03.jpg",
    alt: "",
    title:
      "Blackt Electrotech: 230 Volt Digital Programmable Timer Electronic Timer (24x7): Energy Saving Socket",
    currentPrice: 41.99,
    oldPrice: 0,
  },
];

export const DataProductInCart = createContext();

function Header() {
  const [scroll, setScroll] = useState(false);

  const handleToggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const startPointToHidden = 52; // is height of the TopHolder component
    if (scrolled > startPointToHidden) {
      setScroll(true);
    } else if (scrolled < startPointToHidden) {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleToggleVisible);

  return (
    <DataProductInCart.Provider value={MENU_ITEMS}>
      <header
        className={cx("wrapper", {
          scroll,
        })}
      >
        <TopHolder
          scroll={scroll}
          address="8494 Signal Hill Road Manassas, VA, 20110"
          timeWork="Mon-Fri 08:00 AM - 05:00 PM"
          phone="1 (800) 765-43-21"
          numberBoughtProduct="4"
        />

        <NavigationBar scroll={scroll} />
      </header>
    </DataProductInCart.Provider>
  );
}

export default Header;
