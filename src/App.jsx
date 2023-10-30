import React from "react";
import HomePage from "./HomePage";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import DevDarshan from "./DevDarshan";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import DestinationInfo from "./DestinationInfo";
import Loading from "./Loading";
import Auth0Login from "./Auth0Login";
import BlogPage from "./BlogPage";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header></Header>
        <div className="flex-grow">
          <Routes>
            <Route index element={<HomePage></HomePage>} />
            <Route path="/CharDham" element={<DevDarshan />} />
            <Route path="/login" element={<Auth0Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/destination/:id" element={<DestinationInfo />} />
            <Route path="/Blogs" element={<BlogPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
