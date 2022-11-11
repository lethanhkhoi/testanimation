import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./component/homepage";
import Smoke from "./component/smoke";
import CardEffect from "./component/card";
import ImageEffect from "./component/image";
import Heart from "./component/heart";
import Galaxy from "./component/galaxy";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<HomePage />}></Route> */}
          <Route index element={<Galaxy />}></Route>


          {/* <Route path="/smoke" element={<Smoke />}></Route>
          <Route path="/card" element={<CardEffect />}></Route>
          <Route path="/image" element={<ImageEffect />}></Route>
          <Route path="/heart" element={<Heart />}></Route>
          <Route path="/galaxy" element={<Galaxy />}></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
