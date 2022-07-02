import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navigation from "./components/UI/sections/Navigation";
import SearchSection from "./components/UI/sections/SearchSection";
import HomePage from "./pages/subpage/HomePage";
import PostPage from "./pages/subpage/PostPage";
import ProfilePage from "./pages/subpage/ProfilePage";
import { ContextProvider, UserContext } from "./context/context";
import { useContext } from "react";
import SettingPage from "./pages/subpage/SettingPage";
import SearchPage from "./pages/subpage/SearchPage";

function App() {
  const { userID } = useContext(UserContext);

  return (
    <Router>
      <div
        className={`bg-light-back dark:bg-dark-back box-border min-h-screen ${
          userID !== "" ? "flex flex-row py-8 px-20" : ""
        }`}
      >
        <Navigation />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Routes>
        <SearchSection />
      </div>
    </Router>
  );
}

export default App;
