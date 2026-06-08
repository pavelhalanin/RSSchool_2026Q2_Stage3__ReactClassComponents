import * as yup from "yup";

const PASSWORD_TEST = yup
  .string()
  .required()
  .test({
    message: "1 number",
    test: (value) => /\d/.test(value),
  })
  .test({
    message: "1 uppercase",
    test: (value) => /[A-ZА-Я]/.test(value),
  })
  .test({
    message: "1 lowercase",
    test: (value) => /[a-zа-я]/.test(value),
  })
  .test({
    message: "1 special character",
    test: (value) => /[^A-Za-z0-9А-Яа-я]/.test(value),
  });

export default PASSWORD_TEST;
