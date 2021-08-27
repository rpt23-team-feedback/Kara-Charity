import React, { Fragment, Component } from 'react';
import CharityModal from './CharityModal.jsx';

class CharityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      charityData: null
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(i) {
    const modalBool = this.state.modalOpen;
    this.setState({
      modalOpen: !modalBool,
      charityData: this.props.charities[i]
    });
  }

  render() {
    const charities = this.props.charities;
    const charityData = this.state.charityData;
    const open = this.state.open;
    return (
      <React.Fragment>
        <div className="gallery-title">
          This bundle supports
        </div>
        <div className="gallery-images">
          {charities.map((charity, idx) => {
            return <li key={idx}>
              <img
                src={charity.image}
                onClick={() => this.toggleModal(idx)}
              ></img>
            </li>
          })}
        </div>
        <div>
          {open ? <CharityModal
            name={charityData.name}
            image={charityData.image}
            description={charityData.description}
          /> : null}
        </div>
      </React.Fragment>
    )
  };

}

export default CharityList;