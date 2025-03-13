import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CV from "./pages/CV/CV";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
        </Routes>
    );
}

export default App;
