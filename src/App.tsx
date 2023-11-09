import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { STATE } from "./libs/types";
import UserInfo from "./components/UserInfo";
import { Grid } from "@mui/material";
import { LOGOUT } from "./redux/types";

function App() {
  const { isAuthenticated, user } = useSelector((state: STATE) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.expAt < Date.now()) dispatch({ type: LOGOUT });
  }, [isAuthenticated, user]);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      {!isAuthenticated ? <Login /> : <UserInfo />}
    </Grid>
  );
}

export default App;
