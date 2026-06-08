import * as yup from "yup";

const CONFIRM_PASSWORD_TEST = yup
  .string()
  .required()
  .oneOf([yup.ref("password")], "The password is not equals");

export default CONFIRM_PASSWORD_TEST;
