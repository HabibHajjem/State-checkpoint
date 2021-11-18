import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
        fullName: "Habib Hajjem",
        bio: "Football lover",
        imageSrc:"https://sm.ign.com/ign_fr/news/a/avatar-leg/avatar-legends-becomes-the-biggest-ever-tabletop-rpg-on-kick_1jz1.jpg",
        profession:"engineer",
        isShow:false,
        count:0
    }
  }
  render() { 
    return ( 
      <div className="App" >
        <button onClick={()=>this.setState({isShow:!this.state.isShow})}>{this.state.isShow?"hide ":"show "}profile</button>
        <div className="count">0</div>
        {this.state.isShow?
        <div>
          <h1>Name:{this.state.fullName}</h1>
          <h1>Bio:{this.state.bio}</h1>
          <h1>profession:{this.state.profession}</h1>
          <img src={this.state.imageSrc} alt="profilePicture" />
        </div>:null}
    </div>
     );
  }
}
 
export default App;



