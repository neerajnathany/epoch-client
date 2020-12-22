import React, { Component } from 'react';
import Link from './Link';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="header">
                <Link className="header-title" href="/">{this.props.name}</Link>
                {this.props.children}
                <span className="header-user">Neeraj Nathany</span>
            </header>
         );
    }
}
 
export default Header;