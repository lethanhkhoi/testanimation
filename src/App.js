import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./component/homepage";
import Smoke from "./component/smoke";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/smoke" element={<Smoke />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
