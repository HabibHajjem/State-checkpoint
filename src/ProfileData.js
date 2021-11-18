import react from "react";
import './App.css';

class Data extends react.Component {
    constructor(props) {
        super(props);
        this.state = { 
        count:0
         }
    }
    componentDidMount(){
        setInterval(()=>{this.setState({count:this.state.count+1})},1000);
    }
    render() { 
        return ( 
            <div>
            <h1>Name:{this.props.fullName}</h1>
            <h1>Bio:{this.props.bio}</h1>
            <h1>profession:{this.props.profession}</h1>
            <img src={this.props.imageSrc} alt="profilePicture" />
            <div className="count">{this.state.count}</div>
          </div>
         );
    }
}
 
export default Data;