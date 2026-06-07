export interface IArrayFormDataState {
  arrayFormData: Array<{
    name: string;
    age: number;
    email: string;
    gender: "male" | "female" | "other";
    isAgree: boolean;
  }>;
}

export interface IArrayFormDataStateActions {
  pushToArrayFormData: (
    data: IArrayFormDataState["arrayFormData"][number],
  ) => void;
}

export interface IArrayFormDataSlice extends IArrayFormDataState {
  arrayFormDataActions: IArrayFormDataStateActions;
}
