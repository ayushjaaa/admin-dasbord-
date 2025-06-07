import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaComments,
  FaTasks,
  FaUsers,
  FaCog,
} from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const navItems = [
  { icon: <FaHome />, label: "Home", path: "/home" },
  { icon: <FaComments />, label: "Messages", path: "/messages" },
  { icon: <FaTasks />, label: "Tasks", path: "/tasks" },
  { icon: <FaUsers />, label: "Members", path: "/members" },
  { icon: <FaCog />, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r p-4 flex flex-col justify-between">
      <div>
        {/* Header */}
        <h1 className="text-xl font-bold mb-8 text-gray-800 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-500" />
          Project M.
        </h1>

        {/* Navigation */}
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition ${
                location.pathname === item.path
                  ? "bg-gray-100 font-semibold text-black"
                  : ""
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* My Projects */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-2 text-sm text-gray-500 font-medium">
            <span>MY PROJECTS</span>
            <IoMdAdd className="cursor-pointer" />
          </div>
          <div className="space-y-2 text-sm">
            <ProjectTag color="bg-green-500" name="Mobile App" />
            <ProjectTag color="bg-yellow-500" name="Website Redesign" />
            <ProjectTag color="bg-purple-300" name="Design System" />
            <ProjectTag color="bg-blue-500" name="Wireframes" />
          </div>
        </div>
      </div>

      {/* Thoughts Time */}
      <div className="bg-yellow-50 p-4 rounded-lg mt-4 text-sm text-center">
        <div className="text-yellow-500 text-xl mb-2">💡</div>
        <p className="mb-2 font-medium">Thoughts Time</p>
        <p className="text-gray-600 mb-3">
          We don’t have any notice for you, till then you can share your thoughts with your peers.
        </p>
        <button className="bg-white text-sm px-3 py-1 border rounded-md hover:bg-gray-100">
          Write a message
        </button>
      </div>
    </div>
  );
};

const ProjectTag = ({ color, name }) => (
  <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer">
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      <span>{name}</span>
    </div>
    <BsThreeDotsVertical />
  </div>
);

export default Sidebar;
