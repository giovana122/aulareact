import  { useState } from 'react';

export default function Exercicio1() {
    //variavel de estado para os campos do formulario
    const [numero, setNumero] = useState(0);

    //variavel de estado para o resultado
    const [resultado, setResultado] = useState(0);

    //função para calcular o quadrado ou o cubo
    function calcular() {
        let quadrado, cubo;

        quadrado = Number(numero) * Number(numero);
        cubo = Number(numero) * Number(numero) * Number(numero);

        setResultado("Quadrado:" + quadrado + "-Cubo" + cubo);
    }

    return (
        <div>
            <h1> Exercicio 1 </h1>

            <div className="conteudo">


                <h3>calculo do quadrado/cubo</h3>
                <form>
                    <p>
                        digite um número qualquer: <br />

                        <input type="text" value={numero}
                            onChange={(e) => setNumero(e.target.value)} />

                    </p>
                    <p>
                    <input type="button" value="Exercicio 1" onClik={calcular} />
                    </p>
                    <p>
                        <b>resultado</b>
                        <br />
                        numero é {numero} <br />
                        resultado é {resultado}
                    </p>

                    <p>
                        <a href="/">Voltar</a>
                    </p>
                </form>

            </div>
        </div>
    );
}