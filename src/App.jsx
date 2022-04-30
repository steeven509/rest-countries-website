import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import InfosPage from "./pages/InfosPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/infos" element={<InfosPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
