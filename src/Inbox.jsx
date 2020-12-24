import React, { Component } from 'react';
import Header from './components/Header';
import Group from './components/Group';
import Alert from './components/Alert';
import Promotion from './components/Promotion';
import Transaction from './components/Transaction';
import GenreModal from './components/GenreModal';
import ThreadModal from './components/ThreadModal';
import axios from 'axios';

class Inbox extends Component {

    state = { emails:[], genreList: [], genre: null, emailList:[] };

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

    showGenre = (list,genre) => {this.setState({genreList: list, genre:genre});}
    showThread = (thread) => {this.setState({emailList: thread});}
    clearItem = () => {this.setState({genreList: [], genre:null, emailList: []});}

    render() { 
        return ( 
            <div className="inbox">
                <Header name="Epoch"/>
                <main className="main">
                    <div className="main-content">
                        <div className="main-head">
                            <h2 className="main-title">Emails</h2>
                        </div>
                        <Group content={this.getContent('email')} eClick={this.showThread}/>
                        <Group content={this.getContent('broadcast')} title="Broadcasts" eClick={this.showThread}/>
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
                        <Promotion content={this.getContent('promotion')} gClick={this.showGenre}/>
                        <Transaction bill={this.getContent('bill')} tClick={this.showItem} receipt={this.getContent('transaction')} order={this.getContent('status')}/>
                    </aside>
                </main>
                {this.state.genreList.length !== 0 && 
                        <div className="pop-layer" onClick={this.clearItem}>
                            <GenreModal list={this.state.genreList} genre={this.state.genre}/>
                        </div>
                }
                {this.state.emailList.length !== 0 &&
                        <div className="pop-layer" onClick={this.clearItem}>                            
                            <ThreadModal list={this.state.emailList}/>
                        </div>
                } 
            </div>
        );
    }
}
 
export default Inbox;