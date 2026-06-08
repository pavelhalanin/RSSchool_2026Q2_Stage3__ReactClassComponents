import * as yup from "yup";

const NAME_TEST = yup
  .string()
  .required()
  .test({
    message: "The name must begin with an uppercase letter",
    test: (value) => {
      if (!value) {
        return true;
      }

      const FIRST_CHAR = value[0];
      return FIRST_CHAR === FIRST_CHAR.toLocaleUpperCase();
    },
  });

export default NAME_TEST;
