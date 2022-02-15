import React from "react";
import './styles.css';
import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const Login = () => {
  const paperStyle = { padding: "30px 50px", width: "auto" };

  return (
    <div className="container">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid>
            <h2>SIGN IN TO YOUR ACCOUNT</h2>
          </Grid>
          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <TextField
                fullWidth
                id="login"
                hiddenLabel
                placeholder="Login"
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="password"
                placeholder="Password"
                hiddenLabel
                variant="filled"
                InputProps={{ disableUnderline: true, color: "#b0b1b8",
                fontSize: "12px",
                fontWeight: "bold", }}
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#6a62d2",
                      "&.Mui-checked": {
                        color: "#6a62d2",
                      },
                    }}
                  />
                }
                label="Keep me signed in"
              />
            </Grid>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#6a62d2",
                padding: "14px 130px",
                fontSize: "18px",
              }}
            >
              SIGN IN
            </Button>
          </Grid>
          <Grid 
              container 
              spacing={0}
              direction="column" 
              alignItems="center"
          >
            <Button
            style={{
              color: "#b0b1b8",
              fontSize: "12px",
              fontWeight: "bold",
              paddingTop: "20px"
            }}>
                Forgot your password</Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;