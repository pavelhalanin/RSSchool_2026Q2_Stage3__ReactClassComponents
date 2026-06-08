import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import UncontrolledFormRoot from "./UncontrolledFormRoot";
import { useFormDataActions } from "../../store/form-data/hook";
import type { IFormDataActions } from "../../store/form-data/types";

vi.mock("../../store/form-data/hook", () => ({
  useFormDataActions: vi.fn(),
}));

const mockedUseFormDataActions = vi.mocked(useFormDataActions);

function createMockFormDataActions(resetMock: () => void): IFormDataActions {
  return {
    setFormDataValues: vi.fn(),
    setFormDataErrors: vi.fn(),
    getEmptyErrors: vi.fn(() => ({
      name: [],
      age: [],
      email: [],
      gender: [],
      isAgree: [],
      photo: [],
      country: [],
      password: [],
      confirmPassword: [],
    })),
    setPassword: vi.fn(),
    setConfirmPassword: vi.fn(),
    reset: resetMock,
  };
}

interface ModalPortalProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: React.ReactNode;
}

interface UncontrolledFormProps {
  closeModal: () => void;
}

vi.mock("../ModalPortal/ModalPortal", () => ({
  default: ({ isOpen, closeModal, title, children }: ModalPortalProps) =>
    isOpen ? (
      <div data-testid="modal-portal">
        <h2>{title}</h2>
        <button data-testid="close-modal" onClick={closeModal}>
          Close
        </button>
        {children}
      </div>
    ) : null,
}));

vi.mock("./UncontrolledForm/UncontrolledForm", () => ({
  default: ({ closeModal }: UncontrolledFormProps) => (
    <div data-testid="uncontrolled-form">
      <button onClick={closeModal}>Submit</button>
    </div>
  ),
}));

describe("UncontrolledFormRoot", () => {
  const resetMock = vi.fn();

  beforeEach(() => {
    mockedUseFormDataActions.mockReturnValue(
      createMockFormDataActions(resetMock),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders button with title", () => {
    render(<UncontrolledFormRoot />);
    expect(
      screen.getByRole("button", { name: "Uncontrolled form" }),
    ).toBeDefined();
  });

  it("closes modal and calls reset when closeModal is triggered", () => {
    render(<UncontrolledFormRoot />);
    fireEvent.click(screen.getByRole("button", { name: "Uncontrolled form" }));
    expect(screen.getByTestId("modal-portal")).toBeDefined();

    fireEvent.click(screen.getByTestId("close-modal"));
    expect(screen.queryByTestId("modal-portal")).toBeNull();
    expect(resetMock).toHaveBeenCalledTimes(1);
  });

  it("calls reset when UncontrolledForm calls closeModal", () => {
    render(<UncontrolledFormRoot />);
    fireEvent.click(screen.getByRole("button", { name: "Uncontrolled form" }));
    expect(screen.getByTestId("modal-portal")).toBeDefined();

    fireEvent.click(screen.getByText("Submit"));
    expect(screen.queryByTestId("modal-portal")).toBeNull();
    expect(resetMock).toHaveBeenCalledTimes(1);
  });
});
