import { NavLink } from 'react-router-dom';
import { FaHome,FaTable,FaChartBar, FaUser, FaPlus } from 'react-icons/fa';
const Sidebar = () => {

  return (
    
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <div className='sidebar-icon group'>
          <NavLink to="/">
            <FaHome />
          </NavLink>
          <span className='sidebar-tooltip group-hover:scale-100'>
            Home
          </span>
          </div>
        <div className='sidebar-icon group'>
          <NavLink to="/entries">
            <FaTable />
            </NavLink>
            <span className='sidebar-tooltip group-hover:scale-100'>
            Entries
          </span>
        </div>

        <div className='sidebar-icon group'>
          <NavLink to="/graphs">
            <FaChartBar />
            </NavLink>
            <span className='sidebar-tooltip group-hover:scale-100'>
            Graphs
          </span>
        </div>

        <div className='sidebar-icon group'>
          <NavLink to="/create">
            <FaPlus />
            </NavLink>
            <span className='sidebar-tooltip group-hover:scale-100'>
            New Entry
          </span>
        </div>


        <div className='sidebar-icon group'>
          <NavLink to="/profile">
            <FaUser />
            </NavLink>
            <span className='sidebar-tooltip group-hover:scale-100'>
            My Profile
          </span>
        </div>
    </div>
  );
};



export default Sidebar;