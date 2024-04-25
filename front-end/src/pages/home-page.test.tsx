import { render, screen } from "../test-utils";
import HomePage from "./home-page";

describe("<HomePage />", () => {
  it("should render the title", async () => {
    // Given
    render(<HomePage />);

    // Then
    const title = await screen.findByText(/keoghs react sample/i);

    const item1 = await screen.findByText(
      /typescript adds static type checking/i,
    );

    expect(title).toBeInTheDocument();
    expect(item1).toBeInTheDocument();
  });
});
