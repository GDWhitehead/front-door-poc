import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./pages/loading";

const HomePage = lazy(() => import("./pages/home-page"));
const NotFoundPage = lazy(() => import("./pages/errors/not-found-page"));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ReactRouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </ReactRouterRoutes>
    </Suspense>
  );
};

export default Routes;
