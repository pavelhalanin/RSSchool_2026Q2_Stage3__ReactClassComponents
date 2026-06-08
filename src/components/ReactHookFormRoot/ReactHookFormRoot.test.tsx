import { describe, it, expect, vi, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import ReactHookFormRoot from "./ReactHookFormRoot";

interface ModalPortalProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: React.ReactNode;
}

interface ReactHookFormProps {
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

vi.mock("./ReactHookForm/ReactHookForm", () => ({
  default: ({ closeModal }: ReactHookFormProps) => (
    <div data-testid="react-hook-form">
      <button onClick={closeModal}>Submit</button>
    </div>
  ),
}));

describe("ReactHookFormRoot", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders button with title", () => {
    render(<ReactHookFormRoot />);
    expect(
      screen.getByRole("button", { name: "React hook form" }),
    ).toBeDefined();
  });

  it("closes modal when close button is clicked", async () => {
    render(<ReactHookFormRoot />);
    fireEvent.click(screen.getByRole("button", { name: "React hook form" }));
    await waitFor(() => {
      expect(screen.getByTestId("modal-portal")).toBeDefined();
    });

    fireEvent.click(screen.getByTestId("close-modal"));
    expect(screen.queryByTestId("modal-portal")).toBeNull();
  });

  it("closes modal when ReactHookForm calls closeModal", async () => {
    render(<ReactHookFormRoot />);
    fireEvent.click(screen.getByRole("button", { name: "React hook form" }));
    await waitFor(() => {
      expect(screen.getByTestId("modal-portal")).toBeDefined();
    });

    fireEvent.click(screen.getByText("Submit"));
    expect(screen.queryByTestId("modal-portal")).toBeNull();
  });
});
