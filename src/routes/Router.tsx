import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

//Rotas da aplicação
function Router() {
    return (
        <BrowserRouter>
        {/* Rotas */}
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;