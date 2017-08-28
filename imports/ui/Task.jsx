import React, { Component, PropTypes } from 'react';

import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Task extends Component {
  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }
  componentDidMount() {
    // console.log('開始');
  }
  componentDidUpdate() {
    // console.log('更新');
  }
  render() {
    const owner = (this.props.currentUser.username === this.props.task.username) ? 'owner' : 'other';
    console.log('props', this.props);
    return (
      <div className={owner}>
        <li>
          <span className="text">
            <strong>{this.props.task.username}</strong>: {this.props.task.text}
          </span>
          <button className="delete" onClick={this.deleteThisTask.bind(this)}>
            &times;
          </button>
        </li>
      </div>
    );
  }
}

Task.propTypes = {
  currentUser: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};
