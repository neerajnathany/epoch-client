import React, { Component } from 'react';

class Transaction extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="tran">
                <h5 className="group-title">Your transactions</h5>
                <div>
                    <div className="tran-card" onClick={()=> this.props.tClick(this.props.bill)}>
                        <h5 className="tran-count">{this.props.bill.length}</h5>
                        <h6 className="tran-name">pending invoices</h6>
                    </div>
                    <div className="tran-card" onClick={()=> this.props.tClick(this.props.receipt)}>
                    <h5 className="tran-count">{this.props.receipt.length}</h5>
                        <h6 className="tran-name">receipts</h6>
                    </div>
                </div>
                {this.props.order.map(o=>{
                    return (
                        <div className="order-card">
                            <div className="order-meta">
                                <h5 className="order-subject">{o.subject.text}</h5>
                                <span className="order-time">{o.time.display}</span>
                            </div>
                            <div className="order-body" dangerouslySetInnerHTML={{__html: o.body.html}} />
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Transaction;