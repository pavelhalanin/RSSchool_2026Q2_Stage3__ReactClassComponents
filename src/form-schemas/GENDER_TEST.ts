import * as yup from "yup";

const GENDER_TEST = yup.string().required().oneOf(["male", "female", "other"]);

export default GENDER_TEST;
