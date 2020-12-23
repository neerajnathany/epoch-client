import React, { Component } from 'react';

class Alert extends Component {
    state = { show: true }

    closeAlert = () =>{
        this.setState({show:false});
    }

    render() { 
        var alert = this.props.alert;
        return ( 
            this.state.show && <div className="alert-card">
                <button className="alert-close" onClick={this.closeAlert}>✕</button>
                <div className="alert-meta">
                    <span className="alert-from">{alert.from.name}</span>
                    <span className="alert-time">{alert.time.display}</span>
                </div>
                <div className="alert-body" dangerouslySetInnerHTML={{__html: alert.body.html}} />
            </div>
         );
    }
}
 
export default Alert;