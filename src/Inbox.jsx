import React, { Component } from 'react';
import Header from './components/Header';
import Group from './components/Group';
import Alert from './components/Alert';
import Promotion from './components/Promotion';
import Transaction from './components/Transaction';
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

    getContent = (form) => {
        return this.state.emails.filter(m=>{
            return m.type === form;
        }).sort((a,b)=>{
            return b.time.timestamp - a.time.timestamp;
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
                        <Group content={this.getContent('email')}/>
                        <Group content={this.getContent('broadcast')} title="Broadcasts"/>
                    </div>
                    <aside className="panel">
                        <div className="main-head">
                            <h2 className="main-title">Everything else</h2>
                        </div>
                        <div className="alert">
                            {this.getContent('alert').map(a=>{
                                return <Alert alert={a}/>
                            })}
                        </div>
                        <Promotion content={this.getContent('promotion')} />
                        <Transaction bill={this.getContent('bill')} receipt={this.getContent('transaction')} order={this.getContent('status')}/>
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default Inbox;