import { useState } from "react";
import HomePage from "./HomePage";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import DevDarshan from "./DevDarshan";
import LoginPage from "./LoginPage";
function App() {
  return (
    <>
      <div className="flex flex-col">
        <Routes>
          <Route index element={<HomePage></HomePage>} />
          <Route path="/CharDham" element={<DevDarshan />} />

          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
