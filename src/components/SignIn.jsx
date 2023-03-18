import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { googleSignIn } from "../App";
function SignIn() {
  return (
    <Container
      sx={{
        bgcolor: "#0a1929",
        minHeight: "100vh",
        maxHeight: "100%",
        width: 750,
        maxWidth: "100%",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          maxHeight: "100%",
          width: 750,
          maxWidth: "100%",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "1rem",
            fontSize: "1.4rem",
            fontFamily: "monospace",
          }}
        >
          Please sign in to join
        </h1>
        <Button
          variant="outlined"
          size="large"
          onClick={googleSignIn}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt=""
          />
          &nbsp;&nbsp;Continue with Google
        </Button>
      </Box>
    </Container>
  );
}
export default SignIn;