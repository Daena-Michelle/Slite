import React, { Component } from "react";
import "../App.css";
import "./SideNavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SideNavBar extends Component {

    render() {
        return (
            <div>
                <div class="wrapper">
                    {/* <!-- Sidebar --> */}
                    <nav id="sidebar">
                        <ul class="list-unstyled components">
                            <li class="active">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Favorites</a>
                                <ul class="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <Link to="/people">People and culture</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/policies">Policies</Link>
                            </li>
                            <li>
                                <Link Link to="/management">Management Resources</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}