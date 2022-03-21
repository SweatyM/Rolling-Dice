import React, {Component} from 'react';
import './Die.css';

class Die extends Component{
    render(){
    //let cls = `fas fa-dice-${this.props.face};
      return (
        <div>
          <i class={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 'shaking' }` }></i>
        </div>
      )
    }
}

export default Die