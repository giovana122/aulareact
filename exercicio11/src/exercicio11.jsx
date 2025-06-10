export default function Exercicio11 ({custo})
{
    let custo_distribuidor = (28% + custo);
    let custo_final = (custo+ custo_distribuidor);

    return (<div>
        o  custo_final  é {custo_final}<br/>
    </div> );
}
