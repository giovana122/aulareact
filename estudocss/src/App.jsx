import "./App.css";

export default function App()

{
    const estilo ={
        color: "red",
        textAling: "center"
     
    };

    return (
        <div className="conteuo">
            <h1>Estudo CSS</h1>
            <p>
                O CSS (<i>Cascading Style Sheets</i>) é uma linguagem utilizada para estilizar as <b>páginas web</b>. Com ela podemos definir:
            </p>

            <ul>
                <li>Cores de fundo, do texto e dos elementos.</li>
                <li>Fonte e tamanho das letras </li>
                <li>Posicionamento dos elementos da página </li>
                <li>Espaçamento, bordas, sombras, etc. </li>
                <li>Efeitos visuais e animações </li>


            </ul>
            <h3 style={estilo}>cidade de mococa</h3>

            <p className="centro"> 
        
                <img src= "mococa.jpg" alt=""/>


            </p>
        </div>
    );
}