import Typography from "@mui/material/Typography";
import Page from "./page";
import UsersList from "../components/users/users";
import config from "../config";

const HomePage = () => {
  return (
    <Page title="Home">
      <Typography component="h1" variant="h3" gutterBottom>
        Front door demo - UI: {config.uiIdentity}
      </Typography>
      <UsersList />
    </Page>
  );
};

export default HomePage;
