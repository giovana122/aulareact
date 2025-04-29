import Exemplo1 from "./componentes/exemplo1"
import Exercicio1 from "./componentes/exercicio1"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio3 from "./componentes/exercicio3"
import Exercicio4 from "./componentes/exercicio4"

export default function App() 
{

  return (
    <div>
        <hr/>
      <h1> Exercicios de Componentes</h1>
      <Exemplo1 numero1={10} numero2={5} />
      <Exemplo1 numero1={50} numero2={45.98} />

 
     <h3> chamada para o Exercicio 1</h3> 
      <Exercicio1 fah={100} />

      <hr />
      <h3> Chamada para o Exercio2</h3>
      <Exercicio2 peso="80" altura="1.80" />
      <Exercicio2 peso="60" altura="1.60" />

      <h3>Chamada para o Exercicio3</h3>
      <Exercicio3 valor={100} taxa={10} tempo={2}/>

      <hr />
      <h3> Chamada para o exercicio 4</h3>

      <Exercicio4 tipo={"retangulo"} base={100} altura={30}/>
      <Exercicio4 tipo={"triangulo"} base={100} altura={30}/>
    </div>
  )

}