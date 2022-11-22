import { useState } from "react";
import Tippy from "@tippyjs/react";
import { faBolt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../Button";
import { ValidateForm } from "~/utils/ValidateForm";

import styles from "./ModalVisit.module.scss";

const cx = classNames.bind(styles);

function ModalVisit({ onClick }) {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPhoneValue, setInputPhoneValue] = useState("");
  const [inputAddressValue, setInputAddressValue] = useState("");
  const [inputServiceValue, setInputServiceValue] = useState("");
  const [inputDateValue, setInputDateValue] = useState("");
  const [inputCommentValue, setInputCommentValue] = useState("");
  const [showErrorName, setShowErrorName] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPhone, setShowErrorPhone] = useState(false);

  const handleSubmit = () => {
    const stateName = ValidateForm("name", inputNameValue);
    const stateEmail = ValidateForm("email", inputEmailValue);
    const statePhone = ValidateForm("phone", inputPhoneValue);

    setShowErrorName(!stateName);
    setShowErrorEmail(!stateEmail);
    setShowErrorPhone(!statePhone);

    if (stateName && stateEmail && statePhone)
      console.log(
        `Sending data >>> Name: ${inputNameValue} Email: ${inputEmailValue} Phone ${inputPhoneValue} Address: ${inputAddressValue} Service: ${inputServiceValue} Date of visit: ${inputDateValue} Comment: ${inputCommentValue}`
      );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("overlay")} onClick={onClick}></div>
      <div className={cx("modal")}>
        <FontAwesomeIcon
          className={cx("btn-close")}
          icon={faXmark}
          onClick={onClick}
        />
        <h2 className={cx("title")}>Make an Appointment</h2>
        <div className={cx("form")}>
          <div className={cx("input-group")}>
            <Tippy
              visible={showErrorName}
              interactive
              offset={[-138, -70]}
              animation={false}
              render={(attrs) => (
                <div className={cx("invalid-input")} tabIndex="-1" {...attrs}>
                  <p>Enter your correct name</p>
                </div>
              )}
            >
              <input
                value={inputNameValue}
                className={cx("input")}
                type="text"
                placeholder="Your Name *"
                onChange={(e) => setInputNameValue(e.target.value)}
              />
            </Tippy>
          </div>
          <div className={cx("input-group")}>
            <div className={cx("margin-input")}>
              <Tippy
                visible={showErrorEmail}
                interactive
                offset={[-26, -70]}
                animation={false}
                render={(attrs) => (
                  <div className={cx("invalid-input")} tabIndex="-1" {...attrs}>
                    <p>Enter your correct email</p>
                  </div>
                )}
              >
                <input
                  value={inputEmailValue}
                  className={cx("input")}
                  type="email"
                  placeholder="Your email address *"
                  onChange={(e) => setInputEmailValue(e.target.value)}
                />
              </Tippy>
            </div>
            <div className={cx("margin-input")}>
              <Tippy
                visible={showErrorPhone}
                interactive
                offset={[-18, -70]}
                animation={false}
                render={(attrs) => (
                  <div className={cx("invalid-input")} tabIndex="-1" {...attrs}>
                    <p>Enter your phone number</p>
                  </div>
                )}
              >
                <input
                  value={inputPhoneValue}
                  className={cx("input")}
                  type="text"
                  placeholder="Your phone number *"
                  onChange={(e) => setInputPhoneValue(e.target.value)}
                />
              </Tippy>
            </div>
          </div>
          <div className={cx("input-group")}>
            <input
              value={inputAddressValue}
              className={cx("input")}
              type="text"
              placeholder="Address *"
              onChange={(e) => setInputAddressValue(e.target.value)}
            />
          </div>
          <div className={cx("input-group")}>
            <select
              className={cx("input")}
              value={inputServiceValue}
              onChange={(e) => setInputServiceValue(e.target.value)}
            >
              <option value="Service">Service</option>
              <option value="Service 02">Service 02</option>
              <option value="Service 03">Service 03</option>
              <option value="Service 04">Service 04</option>
              <option value="Service 05">Service 05</option>
            </select>
          </div>
          <div className={cx("input-group")}>
            <input
              value={inputDateValue}
              className={cx("input", "input--date")}
              type="date"
              placeholder="Date of visit"
              onChange={(e) => setInputDateValue(e.target.value)}
            />
          </div>
          <div className={cx("input-group")}>
            <textarea
              value={inputCommentValue}
              className={cx("text-area")}
              placeholder="Your comment"
              onChange={(e) => setInputCommentValue(e.target.value)}
            />
          </div>

          <Button
            primary
            className={cx("btn-submit")}
            iconLeft={<FontAwesomeIcon icon={faBolt} />}
            onClick={handleSubmit}
          >
            Explore services
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalVisit;
