export default function Exercicio9 ({capital, juros, tempo})
{
    let montante = capital * Math.pow(1 + juros/ 100, tempo);

    return (<div>
        seu montante é de {montante}<br/>
    </div> );
}
