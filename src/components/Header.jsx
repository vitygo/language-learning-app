import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const currentLanguage = useSelector((state) => state.language.value);
  return (
    <header>
      <p className="header__logo">Hoplingo</p>
    </header>
  );
}
