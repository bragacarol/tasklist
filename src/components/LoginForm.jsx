import React from "react";
import { TextField, Paper, Button, Box } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "3%",
    },
    divPaper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        padding: 30,
    },
  })
);

export default function LoginForm() {
  const classes = useStyles();

  return (
    <Box className={classes.div}>
      <Paper className={classes.divPaper}>
        <TextField
          style={{ marginBottom: "2%" }}
          id="outlined"
          label="Email"
          required="true"
          variant="outlined"
        />
        <TextField
          id="outlined"
          label="Senha"
          required="true"
          variant="outlined"
        />
        <Button style={{ marginTop: "5%" }} variant="contained">
          Entrar
        </Button>
      </Paper>
    </Box>
  );
}
