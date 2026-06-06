import { boolean, number, object, string } from "yup";

export function getFormSchema() {
  return object({
    name: string()
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
    email: string()
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
    age: number()
      .typeError("Age must be specified")
      .required()
      .positive()
      .integer(),
    gender: string().required().oneOf(["male", "female", "other"]),
    isAgree: boolean().defined().oneOf([true], "You need agree"),
  });
}
