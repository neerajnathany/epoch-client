import React, { Component } from 'react';
import Link from './components/Link';
import axios from 'axios';

class Inbox extends Component {

    state = { emails:[] };

    componentDidMount(){
        this.getMail();
    }

    getMail = async () => {
        const response = await axios.create({baseURL: 'http://localhost:5000/',}).get('/inbox');
        this.setState({emails:response.data});
    }

    getUpper = (email) => {
        this.state.emails.filter(e => {
            return e.response === email._id;
        }).getUpper()
    }

    render() { 
        return ( 
            <div className="inbox">
                <header className="header">
                    <Link className="header-title" href="/">Epoch</Link>
                    <span className="header-user">Neeraj Nathany</span>
                </header>
                {
                    this.state.emails.filter(m=>{
                        return ['email','broadcast'].includes(m.type);
                    }).filter(r=>{
                        return r.response === null;
                    }).sort((a,b)=>{
                        return b.time.timestamp - a.time.timestamp;
                    }).map(e=>{
                        return (
                            <div>
                                <span>{e.subject.text}</span>
                                {this.state.emails.filter(f=>{
                                    return f.response === e._id;
                                }).map(v=>{
                                    return (
                                        <span>
                                            <span>{v.subject.text}</span>
                                            {this.state.emails.filter(d=>{
                                                return d.response === v._id;
                                            }).map(o=>{
                                                return <span>{o.subject.text}</span>
                                            })}
                                        </span>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Inbox;