import { useState } from "react";
export default function Exercicio6() {
    //variavel de estados para os campos do formularios
    const [numero, setNumero] = useState(0);

    //variavel de estados para os campos do formularios
    const [preco, setpreco] = useState(0);

   
    //variavel de estados para o resultado
    const [resultado, setResultado] = useState(0);



    //função para calcular a
    function calcular() {
        let valor, desconto, valorfinal;

        valor = Number(numero) * Number(preco);
        desconto = Number(valor) * 0.10;

        valorfinal = Number(valor) - Number(desconto);

        setResultado("Subtotal:" + valor+ " - Desconto:" + desconto+ "- Valor final:" + valorfinal);
    }
    return (
        <div>
            <h1> Exercicio 6</h1>
            <div className="conteudo">
                <h3> Calculo do quadrado/cubo</h3>

                <form>


                    <p>
                        digite a quantidade<br />
                        <input type="text" value={numero}
                            onChange={(e) => setNumero(e.target.value)} />
                    </p>


                    <p>
                        digite o preço <br />
                        <input type="text" value={preco}
                            onChange={(e) => setpreco(e.target.value)} />
                    </p>




                    <p>
                        <input type="button" value="Exercicio6" onClick={calcular} />

                    </p>
                    <p>
                         {resultado}
                    </p>



                    <p>
                        <a href="/">Voltar</a>
                    </p>


                </form>
            </div>
        </div>
    )
}