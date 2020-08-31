import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// importing pages
import Index from "./pages/index";
import CreateQuiz from "./pages/create.quiz";
import Authenticate from "./pages/signin-up";
// importing custom components
import Navbar from "./components/navbar";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Navbar />
            <Index />
          </Route>
          <Route exact path={"/authenticate"} component={Authenticate} />
          <Route exact path={"/create"} component={CreateQuiz} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
