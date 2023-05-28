import React from "react";

function MathCuriosity({ mathNum, mathCuriosity, image }) {
  return (
    <div className="fact">
      {!mathCuriosity ? (
        <p className="msg">Digite um número para buscar a curiosidade matemática</p>
      ) : (
        <>
          {image && (
            <div className="image-container">
              <img src={image} alt={`Imagem do número ${mathNum}`} />
            </div>
          )}
          <p>{mathCuriosity}</p>
        </>
      )}
    </div>
  );
}

export default MathCuriosity;