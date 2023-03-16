import "./App.css";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AlertDialog from "./Popup";
const user = false;
function App() {
  return <section> {user ? <ChatRoom /> : <SignIn />}</section>;
}

function SignIn() {
  return (
    <Container
      sx={{
        bgcolor: "#0a1929",
        minHeight: "100vh",
        maxHeight: "100%",
        width: 750,
        maxWidth: "100%",
        overflow: "hidden",
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
            fontSize: "1.2rem",
          }}
        >
          Please sign in to join
        </h1>
        <Button variant="outlined" size="large">
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt=""
          />
          &nbsp;&nbsp;Google signin
        </Button>
      </Box>
    </Container>
  );
}
function ChatRoom() {
  return (
    <Container
      sx={{
        bgcolor: "#0a1929",
        minHeight: "100vh",
        maxHeight: "100%",
        width: 750,
        maxWidth: "100%",
      }}
    >
      <AlertDialog />
      <Box
        sx={{
          width: 700,
          maxWidth: "90%",
          display: "flex",
          gap: 1,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          padding: 2,
          bgcolor: "#0a1929",
        }}
      >
        <TextField
          fullWidth
          label="Chat"
          id="fullWidth"
          sx={{
            "& .MuiInputBase-root": {
              color: "white",
              borderColor: "white",
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
            },
            "& .MuiFormLabel-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "#1976d2 1px solid",
            },
          }}
        />
        <Button variant="contained" style={{ fontSize: "20px" }}>
          ▷
        </Button>
      </Box>
    </Container>
  );
}
export default App;
