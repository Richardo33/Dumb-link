import Landing from "./pages/landing";
import Home from "./pages/template";
import Profile from "./pages/profile";
import Preview from "./pages/preview";
import CreateLink from "./pages/createLink";
import MyLink from "./pages/myLink";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/preview" element={<Preview />} />
      <Route exact path="/createlink" element={<CreateLink />} />
      <Route exact path="/mylink" element={<MyLink />} />
    </Routes>
  );
}

export default App;
