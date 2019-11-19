import React from "react";
import { withStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
// import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    background: "#333333"
  },
  label: {
    color: "white"
  },
  input: {
    color: "white"
  }
};

const SignUpForm = props => {
  const { classes } = props;

  return (
    <FormControl>
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        color="input"
      />
    </FormControl>
  );
};

export default withStyles(styles)(SignUpForm);
