import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";
import Form from "./Componets/Form";
import LayoutWithSidebar from "./pages/LayoutWithSidebar";
// import Home from "./pages/Home";
// import Messages from "./pages/Messages";
// import Tasks from "./pages/Tasks";
// import Members from "./pages/Members";
// import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">

        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Routes>
          <Route path="/form" element={<Form/>}></Route>
            


            {/* Routes with sidebar */}
            <Route element={<LayoutWithSidebar/>}>
<Route path="/" element={<Navigate to="/home" replace/>} />
<Route path="/home" element={<Home/>}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
