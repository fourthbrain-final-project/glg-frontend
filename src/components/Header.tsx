import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faComment } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <a className="navbar-item" onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </a>
    );
  };

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <a className="navbar-item" onClick={() => loginWithRedirect()}>Login</a>;
};

class Header extends React.Component<React.HtmlHTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <nav className="navbar  has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item ml-6">
                        <Link to="/">
                            <FontAwesomeIcon icon={faComment} size="2x" />
                        </Link>
                    </div>
                    
                    <div className="navbar-item is-size-4">FLUENTLY</div>
                    
                </div> 
                    
                <div className="navbar-end" style={{
                    paddingRight: "10px"
                }}>
                    <Link className="navbar-item" to="/about">About</Link>
                    <LoginButton />
                    <LogoutButton />
                </div>
                
            </nav>                
        )
    }
    
}

export default Header ;