import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Estudo de Estados</h1>

      <div className="conteudo">
        <p>
          O useState é um hook do React que permite adicionar e gerenciar estados em componentes funcionais. Com ele, você pode criar variáveis que armazenam valores dinâmicos, como textos, números ou objetos, e atualizar esses valores conforme o usuário interage com a interface. Sempre que o estado muda, o componente é re-renderizado automaticamente para refletir as novas informações na tela.
        </p>

        <ul>
            <li><Link to="/Exemplo1">Exemplo 1</Link></li>
            <li><Link to="/Exemplo2">Exemplo 2</Link></li>
        </ul>

<h3> Exercicios </h3>

<ul>
  <li> <a href="/Exercicio1">Exercicio1</a></li>
  <li> <a href="/Exercicio2">Exercicio2</a></li>
  <li> <a href="/Exercicio3">Exercicio3</a></li>
  <li> <a href="/Exercicio4">Exercicio4</a></li>
  <li> <a href="/Exercicio5">Exercicio5</a></li>
  <li> <a href="/Exercicio6">Exercicio6</a></li>
  <li> <a href="/Exercicio7">Exercicio7</a></li>
  <li> <a href="/Exercicio8">Exercicio8</a></li>
  <li> <a href="/Exercicio9">Exercicio9</a></li>
  <li> <a href="/Exercicio10">Exercicio10</a></li>

</ul>

      </div>
    </div>
  );
}