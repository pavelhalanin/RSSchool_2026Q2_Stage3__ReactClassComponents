import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import Modal from "./Modal";

vi.mock("./Modal.module.css", () => ({
  default: {
    modal__wrapper: "modal__wrapper",
    modal__overlay: "modal__overlay",
    modal__content: "modal__content",
    modal__header: "modal__header",
    modal__close_button: "modal__close_button",
    modal__body: "modal__body",
  },
}));

describe("Modal", () => {
  const closeModalMock = vi.fn();
  const children = <div>Modal content</div>;

  afterEach(() => {
    cleanup();
    closeModalMock.mockClear();
  });

  it("renders children and close button", () => {
    render(<Modal closeModal={closeModalMock}>{children}</Modal>);

    expect(screen.getByText("Modal content")).toBeDefined();
    expect(screen.getByText("x")).toBeDefined();
  });

  it("renders title when provided", () => {
    render(
      <Modal closeModal={closeModalMock} title="Test Title">
        {children}
      </Modal>,
    );

    expect(screen.getByText("Test Title")).toBeDefined();
  });

  it("does not render title when not provided", () => {
    render(<Modal closeModal={closeModalMock}>{children}</Modal>);

    const headers = screen.queryAllByRole("heading");
    expect(headers.length).toBe(0);
  });

  it("focuses the wrapper div on mount", () => {
    const { container } = render(
      <Modal closeModal={closeModalMock}>{children}</Modal>,
    );

    const wrapper = container.querySelector(".modal__wrapper");
    expect(wrapper).not.toBeNull();
    expect(document.activeElement).toBe(wrapper);
  });

  it("calls closeModal when Escape key is pressed", () => {
    const { container } = render(
      <Modal closeModal={closeModalMock}>{children}</Modal>,
    );

    const wrapper = container.querySelector(".modal__wrapper");
    expect(wrapper).not.toBeNull();
    fireEvent.keyDown(wrapper!, { key: "Escape" });
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  it("does not call closeModal on other keys", () => {
    const { container } = render(
      <Modal closeModal={closeModalMock}>{children}</Modal>,
    );

    const wrapper = container.querySelector(".modal__wrapper");
    fireEvent.keyDown(wrapper!, { key: "Enter" });
    expect(closeModalMock).not.toHaveBeenCalled();
  });

  it("calls closeModal when overlay is clicked", () => {
    const { container } = render(
      <Modal closeModal={closeModalMock}>{children}</Modal>,
    );

    const overlay = container.querySelector(".modal__overlay");
    expect(overlay).not.toBeNull();
    fireEvent.click(overlay!);
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  it("calls closeModal when close button is clicked", () => {
    render(<Modal closeModal={closeModalMock}>{children}</Modal>);

    const closeButton = screen.getByText("x");
    fireEvent.click(closeButton);
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});
