import * as yup from "yup";

const AGE_TEST = yup
  .number()
  .typeError("Age must be specified")
  .required()
  .positive()
  .integer();

export default AGE_TEST;
