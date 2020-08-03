import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export class TodoRow extends Component {






    render = () =>
    <tr key={ this.props.item.action}>
    <td>
      <p style={this.props.styleDone(this.props.item)}>{this.props.item.action}</p>
    </td>
    <td>
    <input type="checkbox" checked={this.props.item.done} 
    onChange={ () => this.props.callBack(this.props.item)}></input>
    </td>
    <td>
      <button onClick={this.props.deleteTask.bind(this, this.props.item.action)} className="btn btn-outline">
      <FontAwesomeIcon className="text-danger" icon={faTrash} />
      </button>
    </td>
 
 </tr>
}