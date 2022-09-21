import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homejs from "./components/Homejs";
// <BrowserRouter>    </BrowserRouter>
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homejs />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
