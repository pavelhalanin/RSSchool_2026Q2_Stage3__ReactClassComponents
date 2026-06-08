import * as yup from "yup";
import country from "./../const/country.json";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

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

const EMAIL_TEST = yup
  .string()
  .required()
  .test({
    message: "one @",
    test: (value) => {
      if (!value) {
        return;
      }

      return value.split("@").length === 2;
    },
  })
  .test({
    message: "non-empty local part",
    test: (value) => {
      if (!value) {
        return;
      }

      const ARRAY = value.split("@");
      if (ARRAY.length < 2) {
        return;
      }

      const LOCAL_PART = ARRAY[0];
      return LOCAL_PART.length > 0;
    },
  })
  .test({
    message: "Email must contain domain and site name",
    test: (value) => {
      if (!value) {
        return;
      }

      const ARRAY = value.split("@");
      if (ARRAY.length < 2) {
        return;
      }

      const DOMAIN_PART = ARRAY[1];
      const DOMAINS = DOMAIN_PART.split(".");

      for (let i = 0; i < DOMAINS.length; i++) {
        if (DOMAINS[i].length < 1) {
          return;
        }
      }

      return DOMAINS.length >= 2;
    },
  })
  .test({
    message:
      "User name available: A-Z, a-z, 0-9, '.', '_'. User name not start andn end with '.'",
    test: (value) => {
      if (!value) {
        return;
      }

      const ARRAY = value.split("@");
      if (ARRAY.length < 2) {
        return;
      }

      const USER_NAME_PART = ARRAY[0];

      if (USER_NAME_PART.length == 0) {
        return;
      }

      if (USER_NAME_PART[0] === ".") {
        return;
      }

      if (USER_NAME_PART[USER_NAME_PART.length - 1] === ".") {
        return;
      }

      const AVAILABLE_SYMBOLS_ON_USER_NAME_PART =
        "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890";
      for (let i = 0; i < USER_NAME_PART.length; i++) {
        const CHAR = USER_NAME_PART[i];
        if (!AVAILABLE_SYMBOLS_ON_USER_NAME_PART.includes(CHAR)) {
          return;
        }
      }

      return true;
    },
  });

const AGE_TEST = yup
  .number()
  .typeError("Age must be specified")
  .required()
  .positive()
  .integer();

const GENDER_TEST = yup.string().required().oneOf(["male", "female", "other"]);

const AGREE_FLAG_TEST = yup.boolean().defined().oneOf([true], "You need agree");

const PHOTO_TEST = yup
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
  });

const COUNTRY_TEST = yup
  .string()
  .required()
  .test({
    message: "Value need include country name",
    test: (value) => {
      return country.map((e) => e.name).includes(value);
    },
  });

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

const CONFIRM_PASSWORD_TEST = yup
  .string()
  .required()
  .oneOf([yup.ref("password")], "The password is not equals");

export function getFormSchema() {
  return yup.object({
    name: NAME_TEST,
    email: EMAIL_TEST,
    age: AGE_TEST,
    gender: GENDER_TEST,
    isAgree: AGREE_FLAG_TEST,
    photo: PHOTO_TEST,
    country: COUNTRY_TEST,
    password: PASSWORD_TEST,
    confirmPassword: CONFIRM_PASSWORD_TEST,
  });
}
