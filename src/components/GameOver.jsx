import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Welldone from "../img/welldone.svg"
 
import './GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={Welldone} alt="Fim do jogo" />
        <button onClick={()=> dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        
    </div>
  )
}

export default GameOver