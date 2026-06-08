import * as yup from "yup";
import NAME_TEST from "./NAME_TEST";
import EMAIL_TEST from "./EMAIL_TEST";
import AGE_TEST from "./AGE_TEST";
import GENDER_TEST from "./GENDER_TEST";
import AGREE_FLAG_TEST from "./AGREE_FLAG_TEST";
import PHOTO_TEST from "./PHOTO_TEST";
import COUNTRY_TEST from "./COUNTRY_TEST";
import PASSWORD_TEST from "./PASSWORD_TEST";
import CONFIRM_PASSWORD_TEST from "./CONFIRM_PASSWORD_TEST";

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
