import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({
  className,
  style,
  to,
  href,
  children,
  primary,
  extra,
  round,
  roundBorder,
  iconLeft,
  onClick,
  ...passProps
}) {
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    extra,
    round,
    roundBorder,
  });

  let Comp = "button";

  const props = {
    style,
    onClick,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classes} {...props} {...passProps}>
      {iconLeft && <span className={cx("left-icon")}>{iconLeft}</span>}
      {children && <span className={cx("title")}>{children}</span>}
    </Comp>
  );
}

export default memo(Button);
