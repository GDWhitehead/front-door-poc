import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test-utils";
import MainNav from "./main-nav";

describe("<MainNav />", () => {
  it("should render the title", async () => {
    // Given
    render(<MainNav>test</MainNav>);

    // Then
    const title = await screen.findByText(/keoghs react sample/i);
    expect(title).toBeInTheDocument();
  });

  it("should open the menu drawer when the menu button is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(<MainNav>test</MainNav>);

    // When
    await user.click(await screen.findByRole("button", { name: /menu/i }));

    // Then
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
