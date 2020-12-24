import React, { Component } from 'react';

class GenreModal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="genre-modal">
                <div className="genre-wrapper">
                    <h3 className="genre-title"><span>{this.props.genre}</span></h3>
                    {this.props.list.map(e => {
                        return (
                        <div className="promo-card">
                            <div className="promo-meta">
                                <span className="promo-from">{e.from.name}</span>
                                <span className="promo-time">{e.time.display}</span>
                            </div>
                            <h6 className="promo-subject">{e.subject.text}</h6>
                            <div className="promo-body" dangerouslySetInnerHTML={{__html: e.body.html}}/>
                        </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default GenreModal;