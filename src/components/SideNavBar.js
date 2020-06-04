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
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <img
                                src="https://images.assetsdelivery.com/compings_v2/helgaknut/helgaknut1209/helgaknut120900002.jpg"
                                height="20"
                                alt=""
                                />
                                <span> Favorites</span>
                                </a>
                                <ul class="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <Link to="/people">
                                            <img src="https://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52726-sports-medal-icon.png"
                                            height="20" alt=""
                                            />
                                            <span> People and culture</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/policies">
                                    <img src="https://www.freepngimg.com/thumb/book/13-books-png-image-with-transparency-background.png"
                                    height="20" alt=""
                                    />
                                    <span> Policies</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/management">
                                    <img src="https://freeiconshop.com/wp-content/uploads/edd/book-open-outline-filled.png"
                                    height="20" alt=""
                                    />
                                    <span> Management Resources</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}