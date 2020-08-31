import React from "react";

import {
  Container,
  Typography,
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  Button,
} from "@material-ui/core";

const SignUp = (props) => {
  return (
    <Container>
      <Typography variant="h3">SignIn / SignUp</Typography>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="email" />
        <FormHelperText id="email">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="password" />
        <FormHelperText id="password">Enter your password.</FormHelperText>
        <Button>Login</Button>
      </FormControl>
    </Container>
  );
};

export default SignUp;
