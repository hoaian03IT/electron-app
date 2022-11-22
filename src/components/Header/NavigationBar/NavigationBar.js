import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "./NavigationBar.module.scss";
import { publicRoutes } from "~/routes";
import { Link, NavLink } from "react-router-dom";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import routes from "~/config/routes";

const cx = classNames.bind(styles);

function NavigationBar({ scroll, onClick }) {
  return (
    <div
      className={cx("wrapper", {
        scroll,
      })}
    >
      <div className={cx("inner")}>
        <nav className={cx("nav")}>
          <div className={cx("logo")}>
            <Link to={routes.home}>
              <img className={cx("logo-image")} src={images.logo} alt="" />
              <h1 className={cx("logo-text")}>Electron</h1>
            </Link>
          </div>
          <div className={cx("nav-list")}>
            {publicRoutes.map((route, index) => {
              return (
                <NavLink
                  end
                  to={route.path}
                  key={index}
                  className={(nav) => cx("nav-item", { active: nav.isActive })}
                >
                  {route.tag}
                </NavLink>
              );
            })}
          </div>

          <Button
            primary
            iconLeft={<FontAwesomeIcon icon={faBolt} />}
            onClick={onClick}
          >
            Appointment
          </Button>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
