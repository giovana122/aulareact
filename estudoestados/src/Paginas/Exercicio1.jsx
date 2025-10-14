import { useState } from "react";

export default function Exercicio1() {
  //variavel de estados para os campos do formularios
  const [numero, setNumero] = useState(0);

  //variavel de estados para o resultado
  const [resultado, setResultado] = useState(0);

  //função para calcular a
  function calcular() {
    let quadrado, cubo;

    quadrado = Number(numero) * Number(numero);
    cubo = Number(numero) * Number(numero) * Number(numero);
    setResultado("quadrado:" + quadrado + "cubo:" + cubo);
  }
  return (
    <div>
      <h1>Exercicio 1</h1>
      <div className="conteudo">
        <h3>Exercico 1</h3>

        <form>
          <p>
            Digite um numero qualquer <br />
            <input type="text" value={numero}
              onChange={(e) => setNumero(e.target.value)} />
          </p>


          <p>
            <input type="button" value="Calcular" onClick={calcular} />

          </p>
          <p>
            <b>Resultado</b>
            <br />
            Numero é {numero} <br />
            Resultado é {resultado}
          </p>
          <p>
            <a href="/">Voltar para Home</a>
          </p>
        </form>
      </div>

    </div>
  );
}