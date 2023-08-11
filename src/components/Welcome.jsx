import { useContext } from "react"
import { QuizContext } from "../context/quiz"


import Quiz from "../img/quiz.svg"

import "./Welcome.css"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext) //quiz recebe os valores e o dispatch altera os valores


  return (
    <div id="welcome">
      <h2>Bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Quiz begin" />
    </div>
  )
}

export default Welcome