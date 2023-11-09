import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";

import { useGoogleLogin, TokenResponse } from "@react-oauth/google";

import jwt_decode from "jwt-decode";
import axios from "axios";
import { LOGIN_SUCCESS } from "../redux/types";

export default function Login() {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (response: TokenResponse) => {
      console.log(response);
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        console.log(res.data);
        dispatch({
          payload: {
            email: res.data.email,
            avatar: res.data.picture,
            name: res.data.name,
            expAt: Date.now() + response.expires_in,
          },
          type: LOGIN_SUCCESS,
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleLoginClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    login(); // Call the login function here
  };

  return (
    <Button
      variant="contained"
      endIcon={<GoogleIcon />}
      onClick={handleLoginClick}
    >
      Sign In With Google
    </Button>
  );
}
