import React, { Component } from "react";
import {Link} from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="#">Logo</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link class="nav-link " to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " to="/About">About</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link "  href="/Services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link "  href="/Blogs">Blogs</a>
                                </li>
                                 <li class="nav-item">
                                    <a class="nav-link "  href="/Contact">Contact</a>
                                </li>
                     
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar