import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home/Home";
import Contactos from "./views/Contactos/Contactos";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>          
        </Navbar>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contactos" element={<Contactos />} />

</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
