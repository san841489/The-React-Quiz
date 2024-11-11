import { useQuiz } from "../context/QuizContext";

function Options({ question }) {
  const { dispatch, answer, ACTIONS } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div>
      {question.options.map((options, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={options}
          onClick={() => dispatch({ type: ACTIONS.NEW_ANSWER, payload: index })}
          disabled={hasAnswered}
        >
          {options}
        </button>
      ))}
    </div>
  );
}

export default Options;
