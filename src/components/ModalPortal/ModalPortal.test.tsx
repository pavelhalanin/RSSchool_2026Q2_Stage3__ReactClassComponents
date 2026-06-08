import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ModalPortal from "./ModalPortal";

vi.mock("./Modal/Modal", () => ({
  default: ({
    children,
    closeModal,
    title,
  }: {
    children: React.ReactNode;
    closeModal: () => void;
    title?: string;
  }) => (
    <div data-testid="modal">
      {title && <h2>{title}</h2>}
      <button onClick={closeModal}>Close</button>
      {children}
    </div>
  ),
}));

describe("ModalPortal", () => {
  const closeModalMock = vi.fn();
  const children = <div>Modal content</div>;

  it("renders nothing when isOpen is false", () => {
    render(
      <ModalPortal isOpen={false} closeModal={closeModalMock}>
        {children}
      </ModalPortal>,
    );
    expect(screen.queryByTestId("modal")).toBeNull();
  });

  it("renders Modal inside portal when isOpen is true", () => {
    render(
      <ModalPortal isOpen={true} closeModal={closeModalMock} title="Test Title">
        {children}
      </ModalPortal>,
    );
    expect(screen.getByTestId("modal")).toBeDefined();
    expect(screen.getByText("Modal content")).toBeDefined();
    expect(screen.getByText("Test Title")).toBeDefined();
    expect(screen.getByText("Close")).toBeDefined();
  });
});
