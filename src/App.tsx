import { Route, Routes } from "react-router-dom";
import * as Pages from "./components/pages/index";
import Theme from "./styles/theme";
import "./App.less";

export default function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<Pages.LoginPage />} />
        <Route path="/dashboard" element={<Pages.DashboardPage />} />
        <Route path="/starships" element={<Pages.StarshipPage />} />
        <Route path="/people" element={<Pages.PeoplesPage />} />
        <Route path="/species" element={<Pages.SpeciesPage />} />
      </Routes>
    </Theme>
  );
}
