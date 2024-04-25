import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test-utils";
import NotFoundPage from "./not-found-page";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  // type safety not impaired by 'any' in this mock
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("<NotFoundPage />", () => {
  it("should return to the home page when the button is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(<NotFoundPage />);

    // When
    const button = await screen.findByRole("button");
    await user.click(button);

    // Then
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
