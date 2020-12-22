import React, { Component } from 'react';
import EmailItem from './EmailItem';

class Group extends Component {
    state = {  };

    getEmails = (content) => {
        return content.sort((a,b)=>{
            return b.time.timestamp - a.time.timestamp;
        }).map(e=>{
            return e.subject.Id;
        }).filter((s,index,self)=>{
            return self.indexOf(s) === index;
        }).map(u=>{
            return (
                <div className="group-email">   
                    {content.filter(m=>{
                        return m.subject.Id === u
                    }).sort((j1,j2)=>{
                        return j2.time.timestamp - j1.time.timestamp;
                    }).map(v=>{
                        return <EmailItem email={v}/>
                    })}
                </div>
            )
        })
    };

    render() {
        return ( 
            <div className="group">
                {this.props.title ? <h5 className="group-title">{this.props.title}</h5> : null}
                {this.getEmails(this.props.content)}
            </div>
         );
    }
}
 
export default Group;