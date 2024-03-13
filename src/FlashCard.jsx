import preguntas from './questions.json' // local JSON file
import { useState } from 'react';

export default function FlashCard() {

    const [displaySolution, setDisplaySolution] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleAnswerClick = () => {
      setDisplaySolution(!displaySolution)
    }

    const handlePrevQuestion = () => {
        if (currentIndex > 0){
          setDisplaySolution(false)
          setCurrentIndex(currentIndex - 1)
        } else { // if current index == 0
          setDisplaySolution(false)
          setCurrentIndex(preguntas.length - 1)
        }
    }

    const handleNextQuestion = () => {
      if (currentIndex < (preguntas.length - 1)){
        setDisplaySolution(false)
        setCurrentIndex(currentIndex + 1)
      } else {
        setDisplaySolution(false)
        setCurrentIndex(0)
      }
    }

    console.log(preguntas.length)


    return (
      <div className="bg-white w-3/5 h-3/5 mx-auto rounded-xl flex  flex-col items-center justify-center relative">
        {displaySolution ? <p className='font-semibold text-2xl'>{preguntas[currentIndex].respuesta}</p> : <p className='font-semibold text-2xl'>{preguntas[currentIndex].pregunta}</p>}


        <div className='absolute -bottom-7 flex flex-row items-center justify-center gap-4'>
          <button className='bg-white w-40 border-2 h-10 hover:bg-slate-100 transition duration-300 rounded-md' onClick={handlePrevQuestion}>Pregunta Anterior</button>
          <button className='bg-white w-40 border-2 h-10 hover:bg-slate-100 transition duration-300 rounded-md' onClick={handleAnswerClick}>
            {displaySolution ? 'Ver Pregunta': 'Ver Respuesta'}
          </button>
          <button className='bg-white w-40 border-2 h-10 hover:bg-slate-100 transition duration-300 rounded-md' onClick={handleNextQuestion}>Siguiente Pregunta</button>
        </div>
      </div>
    );
  }
  