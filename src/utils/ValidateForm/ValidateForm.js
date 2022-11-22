function ValidateForm(type, value, length = 0) {
  const templateName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const templateEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const templatePhoneNumber = /^\+?[1-9][0-9]{7,14}$/;

  switch (type) {
    case "name":
      return templateName.test(value.trim()) ? true : false;

    case "email":
      return templateEmail.test(value.trim()) ? true : false;

    case "password":
      return value.length >= length ? true : false;

    case "phone":
      return templatePhoneNumber.test(value.trim()) ? true : false;

    default:
      throw new Error("Do not have type of validation");
  }
}

export default ValidateForm;
