export default function Exercicio2({ peso, altura }) {

  let multiplicação = Number(peso) / Number(altura) * Number (altura);
  return (<div>
      <h3> Exemplo 1 - Calculadora </h3>

      seu imc é de {multiplicação}
  </div>
  );

}