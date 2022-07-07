import "../Tasklist.css";
import Form from "../components/Form";
import ToDoItem from "../components/ToDoItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

function App() {
  return (
    <div>
      <Form />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            borderRadius: 1.5,
            marginTop: "3%",
          }}
        >
          <ToDoItem />
        </List>
      </Box>
    </div>
  );
}

export default App;
