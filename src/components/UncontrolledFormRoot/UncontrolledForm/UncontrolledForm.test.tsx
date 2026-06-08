import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UncontrolledForm from "./UncontrolledForm";
import { getFormSchema } from "../../../form-schemas/useFormSchema";
import {
  useFormDataValue,
  useFormDataErrors,
  useFormDataActions,
} from "../../../store/form-data/hook";
import { useArrayFormDataActions } from "../../../store/array-form-data/hook";
import { useCountryArray } from "../../../store/countries/hook";
import usePasswordLevel from "../../../hook/usePasswordLevel/usePasswordLevel";
import getBase64_byFile from "../../../utils/getBase64_byFile/getBase64_byFile";
import type { IFormDataState } from "../../../store/form-data/types";

vi.mock("../../../form-schemas/useFormSchema");
vi.mock("../../../store/form-data/hook");
vi.mock("../../../store/array-form-data/hook");
vi.mock("../../../store/countries/hook");
vi.mock("../../../hook/usePasswordLevel/usePasswordLevel");
vi.mock("../../../utils/getBase64_byFile/getBase64_byFile");
vi.mock("../../Form/Form", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock("../../Form/FormErrors/FormErrors", () => ({ default: () => null }));

describe("UncontrolledForm", () => {
  const closeModalMock = vi.fn();
  const pushToArrayMock = vi.fn();
  const resetMock = vi.fn();
  const setPasswordMock = vi.fn();
  const setConfirmPasswordMock = vi.fn();
  const setFormDataErrorsMock = vi.fn();
  const getEmptyErrorsMock = vi.fn();

  const emptyErrors: IFormDataState["formData"]["errors"] = {
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

  const mockFormValues = {
    name: "",
    age: 0,
    email: "",
    gender: "other" as const,
    isAgree: false,
    photo: "",
    country: "",
    password: "",
    confirmPassword: "",
  };

  beforeEach(() => {
    vi.mocked(useFormDataValue).mockReturnValue(mockFormValues);
    vi.mocked(useFormDataErrors).mockReturnValue(emptyErrors);
    vi.mocked(useFormDataActions).mockReturnValue({
      setFormDataValues: vi.fn(),
      setFormDataErrors: setFormDataErrorsMock,
      getEmptyErrors: getEmptyErrorsMock,
      setPassword: setPasswordMock,
      setConfirmPassword: setConfirmPasswordMock,
      reset: resetMock,
    });
    vi.mocked(useArrayFormDataActions).mockReturnValue({
      pushToArrayFormData: pushToArrayMock,
    });
    vi.mocked(useCountryArray).mockReturnValue([]);
    vi.mocked(usePasswordLevel).mockReturnValue({
      hasNumber: false,
      hasUppercase: false,
      hasLowercase: false,
      hasSpecialCharacter: false,
    });
    vi.mocked(getBase64_byFile).mockResolvedValue("base64mock");
    getEmptyErrorsMock.mockReturnValue(emptyErrors);
  });

  it("submits valid data and calls pushToArray and closeModal", async () => {
    const validateMock = vi.fn().mockResolvedValue({
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      gender: "female",
      isAgree: true,
      photo: new File([""], "pic.jpg", { type: "image/jpeg" }),
      country: "Canada",
      password: "Pass123!",
      confirmPassword: "Pass123!",
    });
    const fakeSchema = { validate: validateMock } as unknown as ReturnType<
      typeof getFormSchema
    >;
    vi.mocked(getFormSchema).mockReturnValue(fakeSchema);

    render(<UncontrolledForm closeModal={closeModalMock} />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByLabelText("Age"), { target: { value: "25" } });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "alice@example.com" },
    });
    fireEvent.click(screen.getByLabelText("Female"));
    fireEvent.click(screen.getByLabelText("Terms & Conditions"));
    fireEvent.change(screen.getByLabelText("Country"), {
      target: { value: "Canada" },
    });

    const fileInput = screen.getByLabelText("Photo") as HTMLInputElement;
    const file = new File(["dummy"], "pic.jpg", { type: "image/jpeg" });
    Object.defineProperty(fileInput, "files", { value: [file] });
    fireEvent.change(fileInput);

    const form = screen.getByRole("button", { name: "Send" }).closest("form")!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(validateMock).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(pushToArrayMock).toHaveBeenCalledWith(
        expect.objectContaining({ name: "Alice", age: 25 }),
      );
    });
    expect(closeModalMock).toHaveBeenCalled();
  });
});
