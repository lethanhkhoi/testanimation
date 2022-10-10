import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./component/homepage";
import Smoke from "./component/smoke";
import BackgroundEffect from "./component/backgroundeffect";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/smoke" element={<Smoke />}></Route>
          <Route path="/background" element={<BackgroundEffect />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
