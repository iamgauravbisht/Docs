import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import TextEditor from "./components/TextEditor";

function App() {
  const Home = () => {
    return (
      <div className="w-screen h-screen px-5">
        <Header />
        <Page />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/New-Page" element={<TextEditor />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
