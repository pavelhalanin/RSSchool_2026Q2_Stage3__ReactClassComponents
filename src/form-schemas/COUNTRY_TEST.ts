import * as yup from "yup";
import country from "./../const/country.json";

const COUNTRY_TEST = yup
  .string()
  .required()
  .test({
    message: "Value need include country name",
    test: (value) => {
      return country.map((e) => e.name).includes(value);
    },
  });
export default COUNTRY_TEST;
