import React, { Component } from 'react';

class GeneralModal extends Component {
    state = {  }
    render() { 
        
        return ( 
            <div className="general-modal">
                <div className="general-wrapper">
                    <h3 className="general-title"><span>{this.props.title}</span> newsletters</h3>
                    {this.props.list.map(e => {
                        return (
                        <div className="item-card">
                            <div className="item-meta">
                                <span className="item-from">{e.from.name}</span>
                                <span className="item-time">{e.time.display}</span>
                            </div>
                            <h6 className="item-subject">{e.subject.text}</h6>
                            <div className="item-body" dangerouslySetInnerHTML={{__html: e.body.html}}/>
                        </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default GeneralModal;