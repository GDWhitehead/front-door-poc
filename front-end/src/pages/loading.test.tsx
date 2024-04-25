import { render, screen } from "../test-utils";
import Loading from "./loading";

describe("<Loading />", () => {
  it("should render the loader", async () => {
    // Given
    render(<Loading />);

    // Then
    const progress = await screen.findByRole("progressbar");

    expect(progress).toBeInTheDocument();
  });
});
