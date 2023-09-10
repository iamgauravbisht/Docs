import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/New-Page" element={<TextEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
