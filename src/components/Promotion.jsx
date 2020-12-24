import React, { Component } from 'react';

class Promotion extends Component {
    state = {  }

    getGenres = (content, gClick) =>{
        return content.map(p=>{
            return p.genre;
        }).filter((a,i,self)=>{
            return self.indexOf(a) === i;
        }).map(g=>{
            return (
                <div className="genre-card" onClick={()=> gClick(content.filter(e=>{
                    return e.genre === g;
                }),g)}>
                    <img className="genre-thumbnail" src={"assets/"+g+".jpg"} alt={g}/>
                    <h6 className="genre-name">{g}</h6>
                </div>
            )
        })
    }

    render() { 
        return ( 
            <div className="genre">                
                <h5 className="group-title">Newsletters & Promotions</h5>
                <div>{this.getGenres(this.props.content,this.props.gClick)}</div>
            </div>
         );
    }
}
 
export default Promotion;