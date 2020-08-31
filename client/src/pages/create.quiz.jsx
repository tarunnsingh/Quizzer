import React from "react";
import Quiz from "../components/questions/quiz.holder";

import { Container, Typography } from "@material-ui/core";

const CreateQuiz = (props) => {
  return (
    <div>
      <Typography variant="h3">Create Quiz</Typography>
      <Container>
        {[1, 2, 3].map((el) => (
          <div key={el} style={{ marginBottom: "20px" }}>
            <Quiz />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default CreateQuiz;
