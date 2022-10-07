import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./component/homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
