import "./MainPage.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LanguageOption from "../components/LanguageOption";
import { Routes, Route } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/language" element={<LanguageOption />} />
      </Routes>
    </div>
  );
}
