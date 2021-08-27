import React from 'react';
import CharityModal from './CharityModal.jsx';

// 1. Render the 3 images of charities on the main page
// 2. On click, show the modal for a specific charity

class CharityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(i) {
    const modalBool = this.state.isOpen;
    this.setState({ isOpen: !modalBool, photoIndex: i });
  }

  render() {
    <div className="gallery-title">
      This bundle supports
    </div>
    <div className="gallery-images">

    </div>
  }

}

// Prior code
/*
const CharityList = ({ charities, toggleBox }) => (
  <ul>
  {charities.map((charity, idx) => {
    return <li>
      <img
        src={charity.image}
        onClick={() => toggleBox(idx)}
        style={{ width: '400px', margin: '5px 10px 5px 10px', boxShadow: '0px 0px 10px black'}}
      ></img>
    </li>
  })}
  </ul>
);
*/

export default CharityList;