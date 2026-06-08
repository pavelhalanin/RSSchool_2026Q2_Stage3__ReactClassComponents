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
      password: string;
      confirmPassword: string;
    };
    errors: {
      name: Array<string>;
      age: Array<string>;
      email: Array<string>;
      gender: Array<string>;
      isAgree: Array<string>;
      photo: Array<string>;
      country: Array<string>;
      password: Array<string>;
      confirmPassword: Array<string>;
    };
  };
}

export interface IFormDataActions {
  setFormDataValues: (data: IFormDataState["formData"]["values"]) => void;
  setFormDataErrors: (data: IFormDataState["formData"]["errors"]) => void;
  getEmptyErrors: () => IFormDataState["formData"]["errors"];
  setPassword: (
    password: IFormDataState["formData"]["values"]["password"],
  ) => void;
  setConfirmPassword: (
    password: IFormDataState["formData"]["values"]["confirmPassword"],
  ) => void;
  reset: () => void;
}

export interface IFormDataSlice extends IFormDataState {
  formDataActions: IFormDataActions;
}
