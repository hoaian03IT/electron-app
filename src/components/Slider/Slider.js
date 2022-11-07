import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classNames from "classnames/bind";

import styles from "./Slider.scss";

const cx = classNames.bind(styles);

function Slider({
  data,
  autoPlay = false,
  transitionTime = "100",
  infiniteLoop = false,
  showThumbs = false,
  showArrows = false,
  showStatus = false,
  showIndicators = false,
  useKeyboardArrows = false,
  FormContent,
}) {
  return (
    <div className={cx("wrapper")}>
      <Carousel
        autoPlay={autoPlay}
        axis="vertical"
        transitionTime={transitionTime}
        infiniteLoop={infiniteLoop}
        centerMode
        showThumbs={showThumbs}
        showArrows={showArrows}
        showStatus={showStatus}
        showIndicators={showIndicators}
        useKeyboardArrows={useKeyboardArrows}
        // swipeable is false to support autoPlay when animationHandler="fade"
        swipeable={false}
        animationHandler="fade"
      >
        {data.map((slider, index) => (
          <div key={index} className={cx("slider-item")}>
            <img className={cx("slider-img")} src={slider.img} alt="" />
            <div className={cx("slider-label")}>
              <p className={cx("slider-title-01")}>{slider.titleFirst}</p>
              <h1 className={cx("slider-title-02")}>{slider.titleSecond}</h1>
            </div>
          </div>
        ))}
      </Carousel>
      {!!FormContent && <div className={cx("form-content")}>{FormContent}</div>}
    </div>
  );
}

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  FormContent: PropTypes.node,
};

export default Slider;
