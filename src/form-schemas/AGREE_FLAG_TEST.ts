import * as yup from "yup";

const AGREE_FLAG_TEST = yup.boolean().defined().oneOf([true], "You need agree");

export default AGREE_FLAG_TEST;
