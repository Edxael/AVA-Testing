import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as MyMat from './01-add.jsx'

class IndexComp extends Component {
  render() {
    console.log(MyMat.add1(2, 3));
    return(
      <div>
        <div>Hello from here</div>
      </div>
    )
  }
}

ReactDOM.render( <IndexComp/> , document.getElementById('root') )
