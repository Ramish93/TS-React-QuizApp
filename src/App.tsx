import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQus } from "./API";
//types
import { Difficulty, QuestionState } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
const App = () => {
  //start quiz function
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQus(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    try {
      const newQuestions = await fetchQuizQus(TOTAL_QUESTIONS, Difficulty.EASY);
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswer([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>let's start Trivia</h1>
      <button className="start" onClick={startQuiz}>
        Start Trivia
      </button>
      <p className="score">score</p>
      <p>Loading Questions..</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAns}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
