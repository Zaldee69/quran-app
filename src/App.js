import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Quran from "./pages/Quran";
import Surah from "./pages/Surah";
import Hadiths from "./pages/Hadiths";
import Hadith from "./pages/Hadith";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quran />} />
        <Route path="/quran/:noSurah" element={<Surah />} />
        <Route path="/hadiths" element={<Hadiths />} />
        <Route path="/hadiths/:perawiSlug" element={<Hadith />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
