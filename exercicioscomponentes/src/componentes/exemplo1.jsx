export default function Exemplo1({ numero1, numero2 }) {

    let soma = Number(numero1) + Number(numero2);
    return (<div>
        <h3> Exemplo 1 - Calculadora </h3>

        A soma dos numero é {soma}
    </div>
    );

}