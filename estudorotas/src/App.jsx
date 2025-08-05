import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
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
       </Routes>
       </BrowserRouter>
    );
}
