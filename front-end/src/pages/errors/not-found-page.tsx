import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Page from "../page";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Page title="404">
      <Typography
        align="center"
        variant="h3"
        component="h1"
        color="textPrimary"
        sx={{ marginBottom: 4 }}
      >
        404: Page Not Found
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        The page you are trying to access does not exist. Check you typed the
        url correctly or try browsing using the navigation.
      </Typography>
      <Box mt={5} display="flex" justifyContent="center">
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleClick}
          type="button"
        >
          Back to home
        </Button>
      </Box>
    </Page>
  );
};

export default NotFoundPage;
