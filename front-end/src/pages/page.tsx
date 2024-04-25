import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ErrorFallback from "./errors/error-fallback";
import logger from "../utils/logger";

export interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page = ({ title, children }: PageProps) => {
  const navigate = useNavigate();
  const handleError = (error: Error) => logger.error(error);

  return (
    <>
      <Helmet>
        <title>{`${title} | Front door POC`}</title>
      </Helmet>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
        onError={handleError}
      >
        {children}
      </ErrorBoundary>
    </>
  );
};

export default Page;
