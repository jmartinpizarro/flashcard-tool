import preguntas from './questions.json' // importo directamente el objeto

export default function FlashCard() {

    return (
      <div className="bg-white w-3/5 h-3/5 mx-auto rounded-xl flex items-center justify-center">
        <p>{preguntas[0].pregunta}</p>
        {<p>{preguntas[1].respuesta}</p>}
      </div>
    );
  }
  