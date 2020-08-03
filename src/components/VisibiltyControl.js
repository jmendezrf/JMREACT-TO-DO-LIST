import React, {Component} from 'react';

export class VisibiltyControl extends Component{
    render = () => 
    <div className="form-check">
         <input className="form-check-input" type="checkbox"
                checked={this.props.isChecked}
                onChange={(e) => this.props.callBack(e.target.checked)} />
         <label className="form-check-label">
            show {this.props.description}
         </label>
    </div>
}