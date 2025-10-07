import React, { useState } from 'react';

export default function Exercicio2()

{

   //variavel de estados para os campos do formulario
   const [numero, setNumero] = useState(0);

   //variavel de estados para o resultado
   const [resultado, setResultado] = useState(0);

   //função para calcular 
   function calcular() {
       let quadrado, cubo;

       quadrado = Number(numero) * Number(numero);
       cubo = Number(numero) * Number(numero) * Number(numero);
setResultado("quadrado:"+quadrado+"cubo:"+cubo);


   }
    return (
        <div>
            <h1> Exercicio 2</h1>
            <div className="conteudo">
                <h3> Calculo do quadrado/cubo</h3>

                <form>
                    <p>
                        digite a temperatura em graus fahrenheit <br />
                      <input type="text"/>
                    </p>
                    <p>
                    <input type="button" value="Exercicio2" />

                    </p>

                    <p>
                     <a href="/">Voltar</a>   
                    </p>


                </form>
            </div>
            
        </div>
    )
}