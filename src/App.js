import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  const students = [
    { id: 1, name: "henry", grade: 6 },
    { id: 2, name: "joe", grade: 6 },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home students={students} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
