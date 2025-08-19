import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";

import Parana from "./Paginas/Parana.jsx";
import SantaCatarina from "./Paginas/SantaCatarina";
import RioGrandeDoSul from "./Paginas/RioGrandeDoSul";
import RioGrandeDoNorte from "./Paginas/RioGrandeDoNorte";

import Amazona from "./Paginas/Amazona";
import Para from "./Paginas/Para";
import Acre from "./Paginas/Acre";
import Roraima from "./Paginas/Roraima";
import Rondonia from "./Paginas/Rondonia";
import Tocantins from "./Paginas/Tocantins";


export default function App()
{
    return (
    <BrowserRouter>
       <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/sp" element={<SaoPaulo/>}/>
        <Route path= "/rj" element={<RioDeJaneiro/>}/>
        <Route path= "/mg" element={<MinasGerais/>}/>
        <Route path= "/es" element={<EspiritoSanto/>}/>

        <Route path= "/pr" element={<Parana/>}/>
        <Route path= "/sc" element={<SantaCatarina/>}/>
        <Route path= "/rs" element={<RioGrandeDoNorte/>}/>
        
       
        <Route path= "/ac" element={<Acre/>}/>
        <Route path= "/am" element={<Amazona/>}/>
        <Route path= "/pa" element={<Para/>}/>
        <Route path= "/ro" element={<Rondonia/>}/>
        <Route path= "/rr" element={<Roraima/>}/>
        <Route path= "/ro" element={<Tocantins/>}/>

       </Routes>
       </BrowserRouter>
    );
}
