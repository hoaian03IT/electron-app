import { useState } from "react";
import Tippy from "@tippyjs/react";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import { ValidateForm } from "~/utils/ValidateForm";

import styles from "./FormContent.module.scss";

const cx = classNames.bind(styles);

function FormContent() {
  const [valueNameInput, setValueNameInput] = useState("");
  const [valueEmailInput, setValueEmailInput] = useState("");
  const [valuePhoneInput, setValuePhoneInput] = useState("");
  const [valueDateInput, setValueDateInput] = useState("");
  const [showErrorName, setShowErrorName] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);

  const handleSubmit = () => {
    const stateName = ValidateForm("name", valueNameInput);
    const stateEmail = ValidateForm("email", valueEmailInput);

    // Bởi vì khi show error là true thì mới hiển thị thông báo => toggle các trạng thái của các input
    setShowErrorName(!stateName);
    setShowErrorEmail(!stateEmail);

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
        <div className={cx("input-group")}>
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
        </div>
        <div className={cx("input-group")}>
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
        </div>
        <div className={cx("input-group")}>
          <input
            value={valuePhoneInput}
            className={cx("input")}
            type="text"
            placeholder="Your phone"
            onChange={(e) => setValuePhoneInput(e.target.value)}
          />
        </div>
        <div className={cx("input-group")}>
          <input
            value={valueDateInput}
            className={cx("input", "input--date")}
            type="date"
            placeholder="Your date"
            onChange={(e) => setValueDateInput(e.target.value)}
          />
        </div>
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
