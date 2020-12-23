import React, { Component } from 'react';

class EmailItem extends Component {
    state = {  }
    render() {
        var email = this.props.email;
        return ( 
            <div className="email-card">
                <div>
                    <span className="email-from">{email.from.name}</span>
                    <span className="email-time">{email.time.display}</span>
                </div>
                <h6 className="email-subject">{email.subject.text}</h6>
                <p className="email-body">{email.body.text}</p>
            </div>
         );
    }
}
 
export default EmailItem;