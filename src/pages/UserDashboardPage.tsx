import "./UserDashboardPage.css";
import { Link, Routes, Route } from "react-router-dom";
// import Hero from "../components/Hero";
import LanguageOption from "../components/LanguageOption";
import { Outlet } from "react-router-dom";

export default function UserDashboardPage() {
  return (
    <div className="user-dashboard-page">
      <SideMenu />
      <Outlet />
    </div>
  );
}

export function SideMenu() {
  return (
    <div className="dashboard__side-menu">
      <div className="side-menu__header">LOGO</div>
      <div className="side-menu__body">
        <ul>
          <li>
            <Link to="learn">
              <img className="body__links-icon" src="./icon-learn.png" alt="" />
              <p className='section-name'>LEARN</p>

            </Link>
          </li>
          <li>
            <Link to="quest">
              <img className="body__links-icon" src="./icon-quest.png" alt="" />
              <p className='section-name'>QUEST</p>
            </Link>
          </li>
          <li>
            <Link to="profile">
              <img className="body__links-icon" src="./icon-bunny.png" alt="" />
              <p className='section-name'>PROOFILE</p>
            </Link>
          </li>
          <li>
            <Link to="more">
              <img className="body__links-icon" src="./icon-more.png" alt="" />
              <p className='section-name'>MORE</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
