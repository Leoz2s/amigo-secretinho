import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { FriendForm } from "../pages/FriendForm";

export default () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/friend"} element={<FriendForm />} />
      </Routes>
    </BrowserRouter>
  )
};