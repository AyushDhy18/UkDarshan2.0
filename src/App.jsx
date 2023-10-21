import React from "react";
import HomePage from "./HomePage";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import DevDarshan from "./DevDarshan";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import DestinationInfo from "./DestinationInfo";
function App() {
  return (
    <>
      <div className="flex flex-col">
        <Routes>
          <Route index element={<HomePage></HomePage>} />
          <Route path="/CharDham" element={<DevDarshan />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/destination/:id" element={<DestinationInfo />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
