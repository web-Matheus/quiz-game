import { useEffect, useState } from "react";

export default function Questions({
  data, 
  setTimeOut,
  questionNumber,
  setQuestionNumber}) {

    const [question,setQuestion] = useState(null);
    const [selectedAnswer, SetSelectedAnswer] = useState(null);
    const [ClassName, SetClassName] = useState("answer");

    useEffect(()=>{
      setQuestion(data[questionNumber - 1])
    },[data, questionNumber])

    const AnswerClicked = e => {
      SetSelectedAnswer(e)
      SetClassName("active")
    }
  return (
    <div className="QeA">
        <div className="question">
           {question?.question}
        </div>
        <div className="answers">
          {question?.answers.map((element) => (
            <div onClick={()=> AnswerClicked(e)}
            className={selectedAnswer === element ? ClassName: "answer "}>{element.text}</div>
          ))}
        </div>
    </div>
  )
}
