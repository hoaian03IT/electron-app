import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Button from "../Button";

import styles from "./ScrollButton.module.scss";

const cx = classNames.bind(styles);

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const handleToggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleToggleVisible);

  return (
    <Button
      className={cx("wrapper", {
        show: visible,
      })}
      iconLeft={<FontAwesomeIcon icon={faArrowUp} />}
      roundBorder
      onClick={scrollToTop}
    />
  );
}

export default ScrollButton;
