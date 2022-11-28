import { HashRouter, Route, Routes } from "react-router-dom";
import history from "./utils/history";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import DispatchAuthPage from "./pages/DispatchAuthPage";
import AboutPage from "./pages/AboutPage";

export default function MyRoutes() {
  return (
    <HashRouter basename="/" history={history}>
      <NavBar />
      <h5 className="text-center text-warning">Project Under Construction</h5>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dispatchauth" element={<DispatchAuthPage />} />
      </Routes>
    </HashRouter>
  );
}
