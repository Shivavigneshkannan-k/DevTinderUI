import "./App.css";
import Login from "./Components/Login";
import Body from "./Components/Body";
import Feed from "./Components/Feed";
import Request from "./Components/Request";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "./Components/ProfileComponent/Profile";
import Connections from "./Components/Connections";

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
          <Route
            index
            path='connections'
            element={<Connections />}
          />
          <Route
            index
            path='request'
            element={<Request />}
          />
        </Route>
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
