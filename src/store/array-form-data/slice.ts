import type { StateCreator } from "zustand";
import type { IArrayFormDataSlice, IArrayFormDataState } from "./types";
import { devtools } from "zustand/middleware";

export const defaultFormData: IArrayFormDataState = {
  arrayFormData: [],
};

export const createArrayFormDataSlice: StateCreator<
  IArrayFormDataSlice,
  [],
  [["zustand/devtools", never]],
  IArrayFormDataSlice
> = devtools(
  (set) => ({
    ...defaultFormData,
    arrayFormDataActions: {
      pushToArrayFormData: (data) => {
        console.log("pushToArrayFormData", data);

        set(
          (state) => {
            return {
              ...state,
              arrayFormData: [data, ...state.arrayFormData],
            };
          },
          false,
          "arrayFormData/pushToArrayFormData",
        );
      },
    },
  }),
  { name: "arrayFormData" },
);
