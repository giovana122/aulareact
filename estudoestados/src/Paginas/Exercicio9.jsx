import { useState } from "react";
export default function Exercicio9()
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

    area= Number(lado) * 1 + Number(nota2) + Number(nota2) ;

    setResultado("Resultado:" + area);
  }
    return (
        <div>
            <h1> Exercicio 9</h1>
            <div className="conteudo">
                <h3> Calculo do quadrado/cubo</h3>

                <form>
                <p>
                        digite o principal<br />
                        <input type="text" value={lado}
              onChange={(e) => setlado(e.target.value)} />
                    </p>

                    <p>
                        digite a taxa de juros <br />
                        <input type="text" value={nota2}
              onChange={(e) => setnota2(e.target.value)} />
                    </p>


                    <p>
                        digite o tempo <br />
                        <input type="text" value={nota3}
              onChange={(e) => setnota3(e.target.value)} />
                    </p>




                    <p>
                    <input type="button" value="Exercicio9"onClick={calcular}  />

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