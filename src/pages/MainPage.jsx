import "./MainPage.css";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="main-page">
    <Header/>
      <Outlet />
    </div>
  );
}
