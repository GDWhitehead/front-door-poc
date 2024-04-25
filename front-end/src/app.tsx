import CssBaseline from "@mui/material/CssBaseline";
import { Helmet } from "react-helmet-async";
import AppProviders from "./context/app-providers";
import Routes from "./routes";
import MainNav from "./components/navigation/main-nav";

const App: React.FC = () => {
  return (
    <AppProviders>
      <CssBaseline />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Front door POC</title>
      </Helmet>
      <MainNav>
        <Routes />
      </MainNav>
    </AppProviders>
  );
};

export default App;
