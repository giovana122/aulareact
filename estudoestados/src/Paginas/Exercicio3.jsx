import { useState } from "react";
export default function Exercicio3() {
  //variavel de estados para os campos do formularios
  const [numero, setNumero] = useState(0);

  //variavel de estados para os campos do formularios
  const [taxa, setTaxa] = useState(0);

  //variavel de estados para os campos do formularios
  const [tempo, setTempo] = useState(0);

  //variavel de estados para o resultado
  const [resultado, setResultado] = useState(0);

  //função para calcular a
  function calcular() {
    let parcela;

    parcela = Number(numero) + Number(numero) * taxa * 2 / 100 * tempo;

    setResultado("Parcela:" + parcela);
  }
  return (
    <div>
      <h1>Exercicio 3</h1>
      <div className="conteudo">
        <h3>Exercicio 3</h3>


        <form>
          <p>
            Digite o valor da prestação <br />
            <input type="text" value={numero}
              onChange={(e) => setNumero(e.target.value)} />
          </p>

          <p>
            Digite o valor do juros <br />
            <input type="text" value={taxa}
              onChange={(e) => setTaxa(e.target.value)} />

          </p>
          <p>
            Digite o tempo em dias de atraso<br />
            <input type="text" value={tempo}
              onChange={(e) => setTempo(e.target.value)} />

          </p>

          <p>
            <input type="button" value="Calcular"onClick={calcular} />

          </p>
          <p>
            <b>Resultado</b>
            <br />

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