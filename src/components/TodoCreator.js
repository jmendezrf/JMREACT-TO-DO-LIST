import React, {Component} from 'react';


export class TodoCreator extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            newItemText: ""
        }
    }

    

  updateNextValue = (event) =>{
    this.setState({newItemText: event.target.value});
 }


 
 createNewTodo = () =>{
    this.props.callBack(this.state.newItemText);
    this.setState({newItemText: ""});
  }
    
    render = () =>

    <div className="my-1">
    <label className="text-left">Create Task</label>
        <input placeholder="Write a Task" className="form-control"
          value={this.state.newItemText}
          onChange={this.updateNextValue}
          name="task"
          required></input>
           <small id="Help" 
          className="form-text text-muted">
            You Must to fill this box to activate the button.</small>
          <button disabled={!this.state.newItemText}  onClick={this.createNewTodo} className="btn btn-primary mt-1">
             Add Task
          </button>
          

  </div>
    
}