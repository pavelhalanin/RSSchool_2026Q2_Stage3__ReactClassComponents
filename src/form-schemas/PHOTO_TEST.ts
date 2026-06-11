import * as yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const PHOTO_TEST = yup
  .mixed<File>()
  .required()
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

export default PHOTO_TEST;
