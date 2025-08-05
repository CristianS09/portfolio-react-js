import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/Not Found Page/NotFound";

//Rotas da aplicação
function Router() {
    return (
        <BrowserRouter>
            {/* Rotas */}
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;