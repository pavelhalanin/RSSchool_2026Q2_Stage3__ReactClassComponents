export interface IArrayFormDataState {
  arrayFormData: Array<{
    id: string;
    name: string;
    age: number;
    email: string;
    gender: "male" | "female" | "other";
    isAgree: boolean;
    photo: string;
    country: string;
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
