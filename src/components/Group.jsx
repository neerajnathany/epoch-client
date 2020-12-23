import React, { Component } from 'react';
import EmailItem from './EmailItem';

class Group extends Component {
    state = {  };

    getEmails = (content) => {
        return content.sort((a,b)=>{
            return b.time.timestamp - a.time.timestamp;
        }).map(f => {
            return content.filter(n=>{
                return n.response === f._id
            }).length === 0 ? f.from.address : null;
        }).filter((a,i,self)=>{
            return self.indexOf(a) === i;
        }).map((e,ind)=>{
            return (
                <div className={"group-sender sender-"+ind}>
                    {
                        content.filter(h=>{
                            return h.from.address === e && content.filter(r=>{
                                return r.response === h._id;
                            }).length === 0;
                        }).map(t=>{
                            return t.subject.Id;
                        }).filter((s,index,self)=>{
                            return self.indexOf(s) === index;
                        }).map(u=>{
                            return (
                                <div className="group-email">   
                                    {content.filter(m=>{
                                        return m.subject.Id === u
                                    }).sort((k,l)=>{
                                        return l.time.timestamp - k.time.timestamp;
                                    }).map(v=>{
                                        return <EmailItem email={v}/>
                                    })}
                                </div>
                            )
                    
                        })
                    }
                </div>
            )
        })
    }

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