import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { STATE } from "../libs/types";
import { LOGOUT } from "../redux/types";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function UserInfo() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: STATE) => state.auth);

  const logOut = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ height: "50px", width: "50px" }}
            aria-label="recipe"
            src={user?.avatar}
          >
            R
          </Avatar>
        }
        title={user?.name}
        subheader={user?.email}
      />
      <CardMedia
        component="img"
        height="194"
        image="http://localhost:3000/banner.jpg"
        alt="Paella dish"
      />
      <CardActions>
        <Button size="small" onClick={logOut}>
          Log out
        </Button>
      </CardActions>
    </Card>
  );
}
