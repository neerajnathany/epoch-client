import React, { Component } from 'react';

class ThreadModal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="thread-modal">
                <div className="thread-wrapper">
                    <h3 className="thread-title"><span>{this.props.list[0].subject.text}</span></h3>
                    {this.props.list.map(e => {
                        return (
                        <div className="thread-card">
                            <div className="thread-meta">
                                <div className="thread-people">
                                    <div className="thread-from"><span>From:</span> {e.from.name}</div>
                                    <div className="thread-to"><span>To:</span> {e.to.name}</div>
                                    {e.cc[0] && <div className="thread-cc"><span>CC'ed:</span> {e.cc.map(r => {
                                        return <span>{r}</span>
                                    })}</div>}
                                </div>
                                <span className="thread-time">{e.time.display}</span>
                            </div>
                            <p className="thread-body">{e.body.text}</p>
                            <div className="email-action">
                                <button className="email-each">Reply</button>
                                <button className="email-each">Forward</button>
                                <button className="email-each">Star</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default ThreadModal;