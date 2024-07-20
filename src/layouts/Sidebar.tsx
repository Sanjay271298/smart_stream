import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarNavItem, sidebarNavlist } from '../config/sidebar-info/sidebar-config';
import "../styles/sidebar/sidebar-styles.scss"
const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {
            sidebarNavlist.items.map((sidebar: SidebarNavItem) => (
              <li key={sidebar.title} className="sidebar-nav-list-item">
                <Link to={sidebar.link} className="sidebar-nav-list-item-link">
                  <sidebar.icon className="sidebar-icon" />
                  {sidebar.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
