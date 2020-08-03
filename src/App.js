import React, {Component} from 'react';
import {TodoBanner} from './components/TodoBanner';
import {TodoCreator} from './components/TodoCreator';
import {TodoRow} from './components/TodoRow';
import {VisibiltyControl} from './components/VisibiltyControl'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName: "JMendez",
      todoItems:[ {action: "buy Flowers", done:true},
                  {action: "buy Vegetables", done:false},
                  {action: "Create WebPage", done:false},
                  {action: "Go run", done:false}],
      //newItemText:""
      showCompleted: true
    }
  }


  updateNextValue = (event) =>{
     this.setState({newItemText: event.target.value});
  }


 createNewTodo = (task) =>{
   if(!this.state.todoItems.find(item => item.action === task))
   {
     this.setState({
       todoItems: [...this.state.todoItems, 
        { action: task, done:false}],
        newItemText: ""
     }, () => localStorage.setItem('todos', JSON.stringify(this.state)));
   }
 }


 deleteTask = (task) => {
   const deleteAction = this.state.todoItems.filter((item) => item.action !== task);
   this.setState({
     todoItems: deleteAction
   }, () => localStorage.setItem('todos', JSON.stringify(this.state)));
 }

/* 
  changeStateData = () =>{
       this.setState({
         userName: this.state.userName === "JMendez" ? "Juan" : "JMendez"
       })
  } */

  toggleTodo = (todo) => {this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ?
      {...item, done: !item.done} : item)}, 
      () => localStorage.setItem('todos', JSON.stringify(this.state)));
     this.styleCompleted(todo)
    }

    styleCompleted(item) {
      return {
       color: item.done ? 'gray' : 'black',
       textDecoration: item.done ? 'line-through': 'none'
      }
    
    }

  todoTableRows = (doneValue) => 
    this.state.todoItems.filter(item => item.done === doneValue).map
    (item => <TodoRow key={item.action} 
      deleteTask={this.deleteTask} 
      item={item} 
      callBack={this.toggleTodo} 
      styleDone={this.styleCompleted} />

    )
/*   this.state.todoItems.map(item =>
   <TodoRow key={item.action} item={item} callBack={this.toggleTodo} styleDone={this.styleCompleted}/> */
 ;


 componentDidMount = () => {
   let data = localStorage.getItem("todos");
   this.setState(data != null 
    ? JSON.parse(data): {
      userName: "JMendez",
      todoItems:[ {action: "buy Flowers", done:true},
                  {action: "buy Vegetables", done:false},
                  {action: "Create WebPage", done:false},
                  {action: "Go run", done:false}],
      //newItemText:""
      showCompleted: true
    })
 }



  render = () => 
     
      <div className="App">
        <TodoBanner userName={this.state.userName} tasks={this.state.todoItems}></TodoBanner>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm">
            <img src={logo} className="App-logo" alt="logo"/>   
             <TodoCreator callBack={this.createNewTodo}></TodoCreator>
                  
              </div>
            <div className="col-sm">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>
                    Description
                  </th>
                  <th>
                    Done
                  </th>
                  <th>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
              {this.todoTableRows(false)}  
               
              </tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
              <VisibiltyControl description="Completed Tasks"
              isChecked={this.state.showCompleted}
              callBack={(checked) =>
              this.setState({
                showCompleted:checked
              })}
              />
          </div>
            {this.state.showCompleted && <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>
                    Description
                  </th>
                  <th>
                    Done
                  </th>
                  
                </tr>
              </thead>
              <tbody>
              {this.todoTableRows(true)}
              </tbody>
              </table>}
            </div>
          </div>
         
       

        </div>
      </div>
    
 
}

