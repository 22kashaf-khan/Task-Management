import React from "react";
import { Link } from "react-router-dom";
import { SideNav, SideNavItem, Button } from "react-materialize";

function Header() {
  return (
    <div>
      <nav>
        <div className="#ff8a80 red accent-1">
          <div className="brand-logo title">
            <i className="material-icons">assignment</i>Task Manager
          </div>
          <ul className="right hide-on-med-and-down title">
            <li>
              { <Link to="/login" className="waves-effect lime accent-2 black-text waves-dark">
                Log Out
              </Link> }
              <div class="log">
              <Link
                to="/tasks"
                className="waves-effect #7c4dff deep-purple accent-2 btn"
              >
                Tasks
              </Link>
              </div>
              <Link
                to="/deleted"
                className="waves-effect #7c4dff deep-purple accent-2 btn"
              >
                Deleted Tasks
              </Link>
            </li>
          </ul>
          <SideNav
            trigger={
              <Button className="#7c4dff deep-purple accent-2">
                <i className="material-icons">menu</i>
              </Button>
            }
            options={{ closeOnClick: true, SideNav: "close" }}
          >
            <SideNavItem subheader>Task Manager</SideNavItem>
            <SideNavItem divider />
            <SideNavItem waves>
              <Link to="/tasks" className="black-text sidenav-close">
                Tasks
              </Link>
            </SideNavItem>
            <SideNavItem waves>
              <Link to="/deleted" className="waves-effect black-text sidenav-close">
                Deleted
              </Link>
            </SideNavItem>
          </SideNav>
        </div>
      </nav>
    </div>
  );
}

export default Header;
