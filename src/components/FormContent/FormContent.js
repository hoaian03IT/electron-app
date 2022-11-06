import { useState } from "react";
import Tippy from "@tippyjs/react";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";

import styles from "./FormContent.module.scss";

const cx = classNames.bind(styles);

function FormContent() {
  const [valueNameInput, setValueNameInput] = useState("");
  const [valueEmailInput, setValueEmailInput] = useState("");
  const [valuePhoneInput, setValuePhoneInput] = useState("");
  const [valueDateInput, setValueDateInput] = useState("");
  const [showErrorName, setShowErrorName] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);

  const templateName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const templateEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = () => {
    const stateName = templateName.test(valueNameInput.trim());
    const stateEmail = templateEmail.test(valueEmailInput.trim());

    if (stateName) {
      setShowErrorName(false);
    } else {
      setShowErrorName(true);
    }

    if (stateEmail) {
      setShowErrorEmail(false);
    } else {
      setShowErrorEmail(true);
    }

    stateName &&
      stateEmail &&
      console.log(
        `Sending data >>> Name: ${valueNameInput}, Email: ${valueEmailInput}, Phone: ${valuePhoneInput}, Date: ${valueDateInput}`
      );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Request Service Today</div>
      <div className={cx("form")}>
        <Tippy
          visible={showErrorName}
          offset={[2, 20]}
          interactive
          animation={false}
          placement="bottom"
          render={(attrs) => (
            <div className={cx("invalid-input")} tabIndex="-1" {...attrs}>
              <p>Please enter your correct name</p>
            </div>
          )}
        >
          <input
            value={valueNameInput}
            className={cx("input")}
            type="text"
            placeholder="Your Name"
            onChange={(e) => setValueNameInput(e.target.value)}
          />
        </Tippy>
        <Tippy
          visible={showErrorEmail}
          offset={[2, 20]}
          interactive
          animation={false}
          placement="bottom"
          render={(attrs) => (
            <div className={cx("invalid-input")} tabIndex="-1" {...attrs}>
              <p>Please enter your correct email</p>
            </div>
          )}
        >
          <input
            value={valueEmailInput}
            className={cx("input")}
            type="email"
            placeholder="Your email"
            onChange={(e) => setValueEmailInput(e.target.value)}
          />
        </Tippy>
        <input
          value={valuePhoneInput}
          className={cx("input")}
          type="text"
          placeholder="Your phone"
          onChange={(e) => setValuePhoneInput(e.target.value)}
        />
        <input
          value={valueDateInput}
          className={cx("input")}
          type="date"
          placeholder="Your date"
          onChange={(e) => setValueDateInput(e.target.value)}
        />
        <Button
          primary
          iconLeft={<FontAwesomeIcon icon={faBolt} />}
          onClick={() => handleSubmit()}
        >
          Get Service
        </Button>
      </div>
    </div>
  );
}

export default FormContent;
