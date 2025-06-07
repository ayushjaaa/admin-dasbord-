import { NavLink } from "react-router-dom";
import { FaHome, FaComments, FaTasks, FaUsers, FaCog } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h1 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <span className="w-3 h-3 bg-purple-400 rounded-full" />
        Project M.
      </h1>

      <nav className="space-y-4">
        <NavItem icon={<FaHome />} label="Home" to="/" />
        <NavItem icon={<FaComments />} label="Messages" to="/messages" />
        <NavItem icon={<FaTasks />} label="Tasks" to="/tasks" />
        <NavItem icon={<FaUsers />} label="Members" to="/members" />
        <NavItem icon={<FaCog />} label="Settings" to="/settings" />
      </nav>
    </div>
  );
};

export default Sidebar;
