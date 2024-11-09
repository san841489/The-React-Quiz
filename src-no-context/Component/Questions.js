import Options from "./Options";

function Questions({ question, dispatch, answer, ACTIONS }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        ACTIONS={ACTIONS}
      />
    </div>
  );
}

export default Questions;
