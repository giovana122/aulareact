export default function Exercicio2({peso, altura})
{
  let IMC = Number(peso) / Number (altura) * Number (altura)
  return(
    <div> 
      seu imc é de {IMC} 
    </div>
  )
}