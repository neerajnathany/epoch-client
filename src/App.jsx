import React, { Component } from 'react';
import Home from './Home';
import Inbox from './Inbox';

class App extends Component {
    state = {location:window.location.pathname}

    componentDidMount(){
        const onLocationChange = () => {
            this.setState({location: window.location.pathname});
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }

    showView = () => {
        if (this.state.location === '/'){
            return <Home/>
        }
        else if(this.state.location === '/inbox'){
            return <Inbox/>
        }
    }
    render() { 
        return ( 
            <div>{this.showView()}</div> );
    }
}
 
export default App;