import type { StateCreator } from "zustand";
import type { IFormDataSlice, IFormDataState } from "./types";
import { devtools } from "zustand/middleware";

export const defaultFormData: IFormDataState = {
  formData: {
    values: {
      name: "",
      age: 0,
      email: "",
      gender: "other",
      isAgree: false,
      photo: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
    errors: {
      name: [],
      age: [],
      email: [],
      gender: [],
      isAgree: [],
      photo: [],
      country: [],
      password: [],
      confirmPassword: [],
    },
  },
};

export const createFormDataSlice: StateCreator<
  IFormDataSlice,
  [],
  [["zustand/devtools", never]],
  IFormDataSlice
> = devtools(
  (set) => ({
    ...defaultFormData,
    formDataActions: {
      setFormDataValues: (data) => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                values: {
                  ...state.formData.values,
                  ...data,
                },
              },
            };
          },
          false,
          "formData/setFormDataValues",
        );
      },

      setFormDataErrors: (data) => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                errors: {
                  ...data,
                },
              },
            };
          },
          false,
          "formData/setFormDataErrors",
        );
      },

      getEmptyErrors: () => {
        return {
          name: [],
          age: [],
          email: [],
          gender: [],
          isAgree: [],
          photo: [],
          country: [],
          password: [],
          confirmPassword: [],
        };
      },

      setPassword: (password) => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                values: {
                  ...state.formData.values,
                  password,
                },
              },
            };
          },
          true,
          "formData/setPassword",
        );
      },

      setConfirmPassword: (confirmPassword) => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                values: {
                  ...state.formData.values,
                  confirmPassword,
                },
              },
            };
          },
          true,
          "formData/setConfirmPassword",
        );
      },

      reset: () => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                values: {
                  ...state.formData.values,
                  name: "",
                  age: 0,
                  email: "",
                  gender: "other",
                  isAgree: false,
                  country: "",
                  password: "",
                  confirmPassword: "",
                  photo: "",
                },
                errors: {
                  ...state.formData.errors,
                  name: [],
                  age: [],
                  email: [],
                  gender: [],
                  isAgree: [],
                  country: [],
                  password: [],
                  confirmPassword: [],
                  photo: [],
                },
              },
            };
          },
          false,
          "formData/reset",
        );
      },
    },
  }),
  { name: "formData" },
);
