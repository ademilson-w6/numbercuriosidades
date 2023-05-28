import React from "react";

function Fact({ num, fact, image }) {
  return (
    <div className="fact">
      {!fact ? (
        <p className="msg">Digite um número para buscar o fato</p>
      ) : (
        <>
          {image && (
            <div className="image-container">
              <img src={image} alt={`Imagem do número ${num}`} />
            </div>
          )}
          <p>{fact}</p>
        </>
      )}
    </div>
  );
}

export default Fact;
