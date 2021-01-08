import React, { Component } from 'react';

class ThreadModal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="thread-modal">
                <div className="thread-wrapper">
                    <h3 className="thread-title"><span>{this.props.list[0].subject.text}</span></h3>
                    {this.props.list.map(e => {
                        return (
                        <div className="thread-card">
                            <div className="thread-meta">
                                <div className="thread-people">
                                    <div className="thread-from"><span>From:</span> {e.from.name}</div>
                                    <div className="thread-to"><span>To:</span> {e.to.name}</div>
                                    {e.cc[0] && <div className="thread-cc"><span>CC'ed:</span> {e.cc.map(r => {
                                        return <span>{r}</span>
                                    })}</div>}
                                </div>
                                <span className="thread-time">{e.time.display}</span>
                            </div>
                            <p className="thread-body">{e.body.text}</p>
                            <div className="email-action">
                                <button className="email-each">
                                    <svg className="email-icon reply" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m10 7.002v-4.252c0-.301-.181-.573-.458-.691-.276-.117-.599-.058-.814.153l-8.5 8.25c-.146.141-.228.335-.228.538s.082.397.228.538l8.5 8.25c.217.21.539.269.814.153.277-.118.458-.39.458-.691v-4.25h1.418c4.636 0 8.91 2.52 11.153 6.572l.021.038c.134.244.388.39.658.39.062 0 .124-.007.186-.023.332-.085.564-.384.564-.727 0-7.774-6.257-14.114-14-14.248z"/>
                                    </svg>
                                </button>
                                <button className="email-each">
                                <svg className="email-icon forward" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m23.772 10.462-8.5-8.25c-.216-.21-.539-.269-.814-.153-.277.118-.458.39-.458.691v4.252c-7.743.134-14 6.474-14 14.248 0 .342.241.622.572.708.059.015.118.022.177.022.274 0 .541-.157.678-.404 2.245-4.056 6.519-6.576 11.155-6.576h1.418v4.25c0 .301.181.573.458.691.274.116.599.057.814-.153l8.5-8.25c.146-.141.228-.335.228-.538s-.082-.397-.228-.538z"/></svg>
                                </button>
                                <button className="email-each">
                                    <svg version="1.1" className="email-icon star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.481 19.481" enable-background="new 0 0 19.481 19.481" width="512">
                                        <g>
                                            <path d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"/>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default ThreadModal;