export interface IFormDataState {
  formData: {
    values: {
      name: string;
      age: number;
      email: string;
      gender: "male" | "female" | "other";
      isAgree: boolean;
      photo: string;
      country: string;
    };
    errors: {
      name: Array<string>;
      age: Array<string>;
      email: Array<string>;
      gender: Array<string>;
      isAgree: Array<string>;
      photo: Array<string>;
      country: Array<string>;
    };
  };
}

export interface IFormDataActions {
  setFormDataValues: (data: IFormDataState["formData"]["values"]) => void;
  setFormDataErrors: (data: IFormDataState["formData"]["errors"]) => void;
  clearErrors: () => void;
  getEmptyErrors: () => IFormDataState["formData"]["errors"];
}

export interface IFormDataSlice extends IFormDataState {
  formDataActions: IFormDataActions;
}
