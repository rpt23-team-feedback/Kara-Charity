import React from 'react';
class CharityModal extends React.Component {
  render() {
    <div className="modal-container">
      <div className="charity-title">
        {this.props.name}
      </div>
      <div className="charity-image" url={this.props.image}></div>
      <div className="charity-description">
        {this.props.description}
      </div>
    </div>
  }
}

export default CharityModal;