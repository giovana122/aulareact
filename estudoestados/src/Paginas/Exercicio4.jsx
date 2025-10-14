import { useState } from "react";
export default function Exercicio4()
{
     //variavel de estados para os campos do formularios
  const [numero, setNumero] = useState(0);

  //variavel de estados para os campos do formularios
  const [lado, setlado] = useState(0);

  //variavel de estados para os campos do formularios
  const [base, setbase] = useState(0);

  //variavel de estados para o resultado
  const [resultado, setResultado] = useState(0);

  //função para calcular a
  function calcular() {
    let area;

    area= Number(lado) * Number(base) /2;

    setResultado("Area:" + area);
  }
    return (
        <div>
            <h1> Exercicio 4</h1>
            <div className="conteudo">
                <h3> Calculo do quadrado/cubo</h3>

                <form>
                    <p>
                        digite o valor da base <br />
                        <input type="text" value={base}
              onChange={(e) => setbase(e.target.value)} />
                    </p>


                    <p>
                        digite o valor da altura <br />
                        <input type="text" value={lado}
              onChange={(e) => setlado(e.target.value)} />
                    </p>




                    <p>
                    <input type="button" value="Exercicio4"onClick={calcular}/>

                    </p>
                    <p>
            <b>Resultado</b>
            <br />

            Resultado é {resultado}
          </p>
                    <p>
                     <a href="/">Voltar</a>   
                    </p>


                </form>
            </div>
        </div>
    )
}