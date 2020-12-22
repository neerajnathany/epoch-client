import React, { Component } from 'react';
import Header from './components/Header';
import Group from './components/Group';
import axios from 'axios';

class Inbox extends Component {

    state = { emails:[] };

    componentDidMount(){
        this.getInbox();
    }

    getInbox = async () => {
        const response = await axios.create({baseURL: 'http://localhost:5000/',}).get('/inbox');
        this.setState({emails:response.data});
    }

    getEmails = (form) => {
        return this.state.emails.filter(m=>{
            return m.type === form;
        }).sort((a,b)=>{
            return b.time.timestamp - a.time.timestamp;
        }).map(e=>{
            return e.subject.Id;
        }).filter((s,index,self)=>{
            return self.indexOf(s) === index;
        }).map(u=>{
            return (
                <div>                                
                    {this.state.emails.filter(m=>{
                        return m.subject.Id === u
                    }).sort((j1,j2)=>{
                        return j2.time.timestamp - j1.time.timestamp;
                    }).map(v=>{
                        return <span>{v.subject.text}</span>
                    })}
                </div>
            )
        })
    };


    render() { 
        return ( 
            <div className="inbox">
                <Header name="Epoch"/>
                <main className="main">
                    <div className="main-content">
                        <div className="main-head">
                            <h2 className="main-title">Emails</h2>
                        </div>
                        <Group content={this.state.emails.filter(e=>{
                            return e.type === 'email';
                        })}/>
                        <Group content={this.state.emails.filter(b=>{
                            return b.type === 'broadcast';
                        })} title="Broadcasts"/>
                    </div>
                </main>
            </div>
        );
    }
}
 
export default Inbox;