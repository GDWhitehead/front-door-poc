import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export interface ErrorFallbackProps {
  resetErrorBoundary(): void;
}

const ErrorFallback = ({ resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <Container>
      <Typography
        align="center"
        variant="h3"
        component="h1"
        color="textPrimary"
        sx={{ marginBottom: 4 }}
      >
        Something went wrong with this page
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        There was a problem loading the page. Try refreshing your browser, or
        click the button to return to the home page.
      </Typography>
      <Box mt={5} display="flex" justifyContent="center">
        <Button
          color="secondary"
          variant="outlined"
          onClick={resetErrorBoundary}
          type="button"
        >
          Back to home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorFallback;
