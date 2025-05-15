import "./App.css";
import Login from "./Components/Login";
import Body from "./Components/Body";
import Feed from "./Components/Feed";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "./Components/ProfileComponent/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Body />}>
          <Route
            index
            element={<Login />}
          />
          <Route
            index
            path='feed'
            element={<Feed />}
          />
          <Route
            index
            path='profile'
            element={<Profile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
