export default function Exercicio8({ peso,altura}) 
{

        let IMC = peso/(altura * altura)
        return (
            <div>
                O valor  do IMC é {IMC}
            </div>
        );

}