import { useState } from "react";
export default function Exercicio5()
{
  
  //variavel de estados para os campos do formularios
  const [lado, setlado] = useState(0);



  //variavel de estados para o resultado
  const [resultado, setResultado] = useState(0);

  //função para calcular a
  function calcular() {
    let area;

    area= Number(lado) * 2;

    setResultado("Area:" + area);
  }
    return (
        <div>
            <h1> Exercicio 5</h1>
            <div className="conteudo">
                <h3> Calculo do quadrado/cubo</h3>

                <form>
                    <p>
                        digite o valor do lado <br />
                        <input type="text" value={lado}
              onChange={(e) => setlado(e.target.value)} />
                    </p>
                    <p>
                    <input type="button" value="Exercicio5"onClick={calcular} />

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