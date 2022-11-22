import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../Button";

import styles from "./SubscribeForm.module.scss";
import { ValidateForm } from "~/utils/ValidateForm";

const cx = classNames.bind(styles);

function SubscribeForm({ className }) {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    const stateEmail = ValidateForm("email", inputEmailValue, inputEmailValue);

    setShowError(!stateEmail);

    stateEmail &&
      console.log(`Sending data(Subscribe) >>> Email: ${inputEmailValue}`);
  };

  return (
    <div className={cx("wrapper", className)}>
      <h1 className={cx("title")}>Subscribe to Our NewsLetter</h1>
      <div className={cx("input-group")}>
        <input
          className={cx("input")}
          value={inputEmailValue}
          type="email"
          placeholder="Your email"
          onChange={(e) => setInputEmailValue(e.target.value)}
        />
        {showError && <p>Enter your correct email</p>}
      </div>
      <Button
        className={cx("submit-btn")}
        extra
        iconLeft={<FontAwesomeIcon icon={faEnvelope} />}
        onClick={handleSubmit}
      >
        Subscribe now
      </Button>
    </div>
  );
}

export default SubscribeForm;
