import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, ACTIONS, index, numQuestions } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: ACTIONS.NEXT_QUESTION })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
