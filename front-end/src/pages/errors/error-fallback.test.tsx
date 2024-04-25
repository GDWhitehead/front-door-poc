import userEvent from "@testing-library/user-event";
import { screen, render } from "../../test-utils";
import ErrorFallback from "./error-fallback";

describe("<ErrorFallback />", () => {
  it("should reset the error boundary when the button is clicked", async () => {
    // Given
    const resetFunc = jest.fn();
    const user = userEvent.setup();
    render(<ErrorFallback resetErrorBoundary={resetFunc} />);

    // When
    await user.click(screen.getByRole("button"));

    // Then
    expect(resetFunc).toHaveBeenCalled();
  });
});
