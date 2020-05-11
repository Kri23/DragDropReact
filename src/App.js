import React, {useState} from 'react';
import Board from './Board/Board';
import Card from './Card/Card'

function App() {
  const [state, setState] = useState({
    count: 1,
    child : []
  })
  const addChild = (e) => {
    const msg = document.getElementById('msg').value;
    if(!msg){return}
    setState({
    child: [...state.child, <Card id={state.count} msg={msg}/>],
    count: state.count+1
    })
  }
  return (
    <div className="App">
      <div className="Ip">
        <input id="msg" type="text" placeholder="Card Msg"></input>
        <button onClick={addChild}>Add Component</button>
      </div>
      {state.child}
      <div className="flex"><Board/><Board/><Board/><Board/><Board/><Board/><Board/><Board/></div>
    </div>
  );
} 

export default App;
