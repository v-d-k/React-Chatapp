import "./App.css";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AlertDialog from "./Popup";
const user = true;
function App() {
  return <section> {user ? <ChatRoom /> : <SignIn />}</section>; 
}

function SignIn() {
  return <h1>hello</h1>;
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
