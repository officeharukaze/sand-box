import React from 'react';

export default class MemoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    const { memo, removeMemo } = this.props;
    removeMemo(memo._id);
  }
  render() {
    const { memo } = this.props;
    return (
      <div className="memo-item">
        <a href="#" onClick={this.onClick} className="remove-button">
          &times;
        </a>
        <textarea className="textarea" defaultValue={memo.content} />
      </div>
    );
  }
}

MemoItem.propTypes = {
  memo: React.PropTypes.object.isRequired,
  removeMemo: React.PropTypes.func.isRequired,
};
