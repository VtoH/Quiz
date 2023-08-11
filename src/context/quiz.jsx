import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action) =>{
    console.log(state, action)


    
    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(()=>{
                return Math.random() - 0.5;
            })
            

        
            
            return {
                ...state,
                questions: reorderedQuestions,
            }; 

        case "NEW_GAME": {
            console.log(questions);
            console.log(initialState);
            return initialState;
             }

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1
            let endGame = false

            if(!questions[nextQuestion]) {
                endGame = true
            }

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            }


            case "CHECK_ANSWER": {
                if (state.answerSelected) return state;
          
                const answer = action.payload.answer;
                const option = action.payload.option;
                let correctAnswer = 0;
          
                if (answer === option) correctAnswer = 1;
          
                return {
                  ...state,
                  score: state.score + correctAnswer,
                  answerSelected: option,
                };
              }
                

        default:
            return state;
    }

}

export const QuizContext = createContext() //onde eu vo habilitar o context 

export const QuizProvider = ({ children }) => { //onde eu vo prover o context
    const value = useReducer(quizReducer, initialState); 

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}