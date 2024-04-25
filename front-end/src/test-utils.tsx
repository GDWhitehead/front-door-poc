/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppProviders from "./context/app-providers";

export interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <MemoryRouter>
      <AppProviders>{children}</AppProviders>
    </MemoryRouter>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">,
): RenderResult => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

export * from "@testing-library/react";

export { customRender as render };
