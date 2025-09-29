import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import Hero from "./components/Hero";
import LanguageOption from "./components/LanguageOption";
import LearningPage from "./pages/LearningPage";
import More from "./pages/More";
import Quest from "./pages/Quest";
import Profile from "./pages/Profile";
import LevelPage from "./pages/LevelPage";
import { LevelBlock } from "./pages/LearningPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Hero />} />
          <Route path="hero" element={<Hero />} />
          <Route path="language" element={<LanguageOption />} />
        </Route>

        <Route path="/dashboard" element={<UserDashboardPage />}>
          <Route index element={<LearningPage />} />
          <Route path="learn" element={<LearningPage />} />
          <Route path="level" element={<LevelPage />} />
          <Route path="more" element={<More />} />
          <Route path="quest" element={<Quest />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
