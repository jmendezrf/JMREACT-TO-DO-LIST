import React, {Component} from 'react';


export class TodoBanner extends Component {
    render = () =>
    <h4 className="bg-dark text-white text-center p-2">
    {this.props.userName}'s To do List
    ({ this.props.tasks.filter(t => !t.done).length} items to do)
  </h4>
}