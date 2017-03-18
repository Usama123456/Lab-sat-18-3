import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
  
  








class App extends Component {
  constructor(props){
    super(props)

    this.state={
      todos:[]
    }
  }



  addTodo(ev){

  ev.preventDefault();
   let tod=this.refs.todo.value;
  let database=firebase.database().ref()
  database.push({todo: tod })

  this.refs.todo.value='';
database.on("child_added",(snap)=>{
let currentTodo=this.state.todos;
currentTodo.push(snap.val())
this.setState({todos:currentTodo})
 console.log(this.state.todos)
})





  // let lis=document.createElement('li');
  // let addtodo=document.createTextNode(tod)
  // let ul=this.refs.ul;
  // ul.appendChild(lis);
  // lis.innerHTML=tod;
  // let span=document.createElement("span");
  // let cross=document.createTextNode("x");
  // lis.appendChild(span);
  // span.appendChild(cross);
  // span.className='cross';


  





}
  
  render() {





    return (
      <div className="App">
        <h2>React +firebase Todo</h2>
      <form>
      <input ref='todo' placeholder='Please write something'/>
      <button onClick={this.addTodo.bind(this)}>Add</button>
      <ul ref='ul'></ul>

      </form>
      </div>
    );
  }
}

export default App;
