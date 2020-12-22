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
                    }).sort((a,b)=>{
                        return b.time.timestamp - a.time.timestamp;
                    }).filter(r=>{
                        return r.response === null;
                    }).map(e=>{
                        return (
                            <div>                                
                                {this.state.emails.filter(s=>{
                                    return s.subject.Id === e.subject.Id
                                }).map(v=>{
                                    return <span>{v.subject.text}</span>
                                })}
                        </div>)
                    })
                }
            </div>
        );
    }
}
 
export default Inbox;