import React,{Component} from 'react';

class Learn extends Component{
    state={
        colorr:'red'
    }
    render(){
        let styling={
            border:'2px solid black',
            padding:'10px',
            margin:'20px'
        }
        return(
            <div className="class1" style={styling}>
                <h1 style={colorStyle}>hello</h1>
        <h2>ini adalah prop brand model {this.props.brand.model}</h2>
            </div>
        )
    }
}
const colorStyle={
    color:'red',
    fontSize:'20px',
    textDecoration:'underline'
}
export default Learn;