import * as yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function getFormSchema() {
  return yup.object({
    name: yup
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
      }),
    email: yup
      .string()
      .required()
      .test({
        message: "Email must include one @ symbol",
        test: (value) => {
          if (!value) {
            return;
          }

          return value.split("@").length === 2;
        },
      })
      .test({
        message: "Email must contain domain and subdomain",
        test: (value) => {
          if (!value) {
            return;
          }

          const SPLIT_AT = value.split("@");
          if (SPLIT_AT.length !== 2) {
            return;
          }

          const DOMAIN_PART = SPLIT_AT[1];
          const DOMAINS = DOMAIN_PART.split(".");

          for (let i = 0; i < DOMAINS.length; i++) {
            if (DOMAINS[i].length < 1) {
              return;
            }
          }

          return DOMAINS.length >= 2;
        },
      }),
    age: yup
      .number()
      .typeError("Age must be specified")
      .required()
      .positive()
      .integer(),
    gender: yup.string().required().oneOf(["male", "female", "other"]),
    isAgree: yup.boolean().defined().oneOf([true], "You need agree"),
    photo: yup
      .mixed<File>()
      .nullable()
      .test({
        message: "File extensions available are .png and .jpeg.",
        test: (value) => {
          if (!value) return true;

          console.log(value);
          console.log(value.type);
          return ["image/png", "image/jpeg"].includes(value.type);
        },
      })
      .test({
        message: `Maximum file size is ${MAX_FILE_SIZE} bytes`,
        test: (value) => {
          if (!value) return true;
          return value.size <= MAX_FILE_SIZE;
        },
      }),
  });
}
