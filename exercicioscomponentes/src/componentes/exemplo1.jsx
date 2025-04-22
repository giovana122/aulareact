
import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio from "./Componentes/Exercicio1"


export default function App()

{

return (

<div>


<h1>Exercícios de Componentes</h1>

<h3>Chamada para o Exemplo1</h3>

<Exemplo1 numero1={8} numero2={2} />

<Exemplo1 numero1={10} numero2={22} />

<Exemplo1 numero= {7.5} numero2={5.8} />

<Exemplo1 numero1={-58} numero2={65} />

<hr />

<h3>Chamada para o Exercício 1</h3>


<Exercicio1 fah={100} />


<Exercicio1 fah={50} />


<Exercicio1 fah-32 />


</div>



)



}