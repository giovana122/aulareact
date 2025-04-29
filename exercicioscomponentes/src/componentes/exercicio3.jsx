export default function Exercicio3({ valor, taxa, tempo}) {

  let multiplicação = valor + (valor * (taxa * taxa)/100 * tempo ) ;
  return (<div>
      <h3> Exercicio3 - Calculadora </h3>

      seu imc é de {multiplicação}
  </div>
  );

}
