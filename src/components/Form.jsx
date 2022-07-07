import React from "react";
import { TextField, Paper, Button, IconButton, Box } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 20,
      paddingTop: 20,
      width: "80%",
    },
    button: {
      display: "flex",
      alignItems: "center",
      marginLeft: 10,
    },
    userButton: {
      justifyContent: "flex-end",
    },
  })
);

export default function Form() {

  const [text, setText] = useState();

  const classes = useStyles();

  return (
    <Paper sx={{ display: "flex", justifyContent: "center", marginTop: "3%", flexDirection: "row" }}>
      <Box className={classes.div}>
        <TextField
          id="outlined"
          label="Escreva sua tarefa"
          variant="outlined"
          sx={{ marginLeft: "4%" }}
        />
        <Button  style={{ marginLeft: "5%" }} variant="contained">
          Adicionar
        </Button>
      </Box>
      <Box
        style={{ width: "20%", display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton style={{ marginRight: "10%" }} >
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>
    </Paper>
  );
}
