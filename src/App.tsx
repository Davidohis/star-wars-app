import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages/index";
import Theme from "./styles/theme";
import "./App.less";

export default function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<Pages.LoginPage />} />
        <Route path="/dashboard" element={<Pages.DashboardPage />} />
        <Route path="/people" element={<Pages.PeoplesPage />} />
        <Route path="/preview/:id" element={<Pages.PreviewPage />} />
      </Routes>
    </Theme>
  );
}
