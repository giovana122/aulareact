import { useState } from "react";
export default function Exercicio10()
{
     //variavel de estados para os campos do formularios
  const [numero, setNumero] = useState(0);

  //variavel de estados para os campos do formularios
  const [lado, setlado] = useState(0);

  //variavel de estados para os campos do formularios
  const [nota2, setnota2] = useState(0);

   //variavel de estados para os campos do formularios
   const [nota3, setnota3] = useState(0);

  //variavel de estados para o resultado
  const [resultado, setResultado] = useState(0);

  //função para calcular a
  function calcular() {
    let area;

    area= Number(lado) * Number(nota3) * 30 ;

    setResultado("Resultado:" + area);
  }
    return (
        <div>
            <h1> Exercicio 10</h1>
            <div className="conteudo">
              

                <form>
                    <p>
                        digite o valor de horas <br />
                        <input type="text" value={lado}
              onChange={(e) => setlado(e.target.value)} />
                    </p>


                    <p>
                        digite a quantidade de horas <br />
                        <input type="text" value={nota3}
              onChange={(e) => setnota3(e.target.value)} />
                    </p>




                    <p>
                    <input type="button" value="Exercicio10"onClick={calcular} />

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