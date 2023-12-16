import React from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.context);
        let user = this.context.user;
        return (
            <header>
                <Link to="/" className="title-logo">
                    <img src="/static/assets/logo.png" alt="static" />
                    <span>Auction House</span>
                </Link>
                <nav className="main-nav nav-mid">

                    {/* <!-- User actions --> */}
                    {user && (
                        <ul>
                            <li>
                                <Link to="/catalog">Browse</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>

                            <li className="user">
                                <Link to="/create">Publish</Link>
                            </li>


                            <li className="user">
                                <Link to="/closed">Closed Auctions</Link>
                            </li>


                            <li className="user">
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>
                    )}

                    {/* <!-- Guest actions --> */}

                    {!user && (
                        <ul>
                            <li>
                                <Link to="/catalog">Browse</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>

                            <li className="guest">
                                <Link to="/register">Register</Link>
                            </li>

                            <li className="guest">
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    )}

                </nav>
            </header>
        );
    }
}
  
Header.contextType = AuthContext;
