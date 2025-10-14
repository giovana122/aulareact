import { useState } from "react";
export default function Exercicio2() {
   //variavel de estados para os campos do formularios
   const [numero, setNumero] = useState(0);

   //variavel de estados para o resultado
   const [resultado, setResultado] = useState(0);
 
   //função para calcular o quadrado ou o cubo
   function calcular() {
     let fah;
 
     fah = Number(numero) - 32 * 5 /9;
    
     setResultado("temperatura:" + fah);
   }
    return (
      <div>
        <h1>Exercicio 2</h1>
        <div className="conteudo"> 
          <h3>Exercico 2</h3>
        
      <form>
      <p>
          Digite a temperatura em graus fahrenhet <br/>
          <input type="text" value={numero}
              onChange={(e) => setNumero(e.target.value)} />
      </p>

      
     
      <p>
            <input type="button" value="Calcular" onClick={calcular} />

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