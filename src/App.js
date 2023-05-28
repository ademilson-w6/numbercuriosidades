import { useState } from "react";
import Fact from "./Fact";
import MathCuriosity from "./MathCuriosity";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [fact, setFact] = useState("");
  const [image, setImage] = useState("");
  const [mathCuriosity, setMathCuriosity] = useState("");
  const [mathCuriosityImage, setMathCuriosityImage] = useState("");
  const [clean, setClean] = useState(false);

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "" || /^([0-9]|10)$/.test(inputValue)) {
      setNumber(inputValue);
    }
  };

  const fetchFact = () => {
    if (number !== "") {
      const url = `http://localhost:3001/numbers/${number}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setFact(data.fact);
          setImage(data.imagem);
        })
        .catch((error) => console.error(error));
    }
  };

  const fetchMathCuriosity = () => {
    if (number !== "") {
      const url = `http://localhost:3001/numbers/${number}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setMathCuriosity(data.mathCuriosity);
          setMathCuriosityImage(data.imagem);
        })
        .catch((error) => console.error(error));
    }
  };
  

  const handleSearchFact = () => {
    fetchFact();
  };

  const handleSearchMathCuriosity = () => {
    fetchMathCuriosity();
  };

  const handleClearResults = () => {
    setFact("");
    setMathCuriosity("");
    setNumber("");
    setImage("");
    setClean(true);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          pattern="^(10|[0-9])$"
          placeholder="Digite um número de 0 a 10"
          value={number}
          onChange={handleNumberChange}
        />
      </div>

      <div className="button-container">
        <button onClick={handleSearchFact}>Buscar Fato</button>
        <button onClick={handleSearchMathCuriosity}>
          Buscar Curiosidade Matemática
        </button>
        <button onClick={handleClearResults}>Limpar</button>
      </div>

      <div className="facts-container">
        <div className="fact-card">
          <h2>Fato:</h2>
          <Fact num={number} fact={fact} image={image} clean={clean} />
        </div>
      </div>

      <div className="facts-container">
        <div className="fact-card">
          <h2>Curiosidade Matemática:</h2>
          <MathCuriosity
            mathNum={number}
            mathCuriosity={mathCuriosity}
            image={mathCuriosityImage}
            clean={clean}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
