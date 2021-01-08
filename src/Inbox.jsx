import React, { Component } from 'react';
import Header from './components/Header';
import Group from './components/Group';
import Alert from './components/Alert';
import Promotion from './components/Promotion';
import Transaction from './components/Transaction';
import GenreModal from './components/GenreModal';
import ThreadModal from './components/ThreadModal';
import Empty from './components/Empty';
import axios from 'axios';

class Inbox extends Component {

    state = { emails:[], genreList: [], title: null, emailList:[] };

    componentDidMount(){
        this.getInbox();
    }

    getInbox = async () => {
        const response = await axios.create({baseURL: 'https://epoch-backend.herokuapp.com/',}).get('/inbox');
        this.setState({emails:response.data});
    }

    getContent = (form) => {
        return this.state.emails.filter(m=>{
            return m.type === form;
        }).sort((a,b)=>{
            return b.time.timestamp - a.time.timestamp;
        })
    };

    showGenre = (list,title) => {this.setState({genreList: list, title:title});}
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
                        {this.state.emails.length ? <div><Group content={this.getContent('email')} eClick={this.showThread}/>
                        <Group content={this.getContent('broadcast')} title="Broadcasts" eClick={this.showThread}/></div> : <Empty/>}
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
                        <Transaction bill={this.getContent('bill')} tClick={this.showGenre} receipt={this.getContent('transaction')} order={this.getContent('status')}/>
                    </aside>
                </main>
                {this.state.genreList.length !== 0 && 
                    <div>
                        <div className="pop-layer1" onClick={this.clearItem}></div>
                        <div className="pop-layer2">
                            <GenreModal list={this.state.genreList} title={this.state.title}/>
                        </div>
                    </div>
                }
                {this.state.emailList.length !== 0 &&
                    <div>
                        <div className="pop-layer1" onClick={this.clearItem}></div>
                        <div className="pop-layer2">                            
                            <ThreadModal list={this.state.emailList}/>
                        </div>
                    </div>
                } 
            </div>
        );
    }
}
 
export default Inbox;