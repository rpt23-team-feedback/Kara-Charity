import React from 'react';
import CharityModal from './CharityModal.jsx';

// 1. Render the 3 images of charities on the main page
// 2. On click, show the modal for a specific charity

// props - all 1-3 charities, all their info!

class CharityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  // Conditionally render CharityModal
  toggleModal(i) {
    const modalBool = this.state.modalOpen;
    this.setState({ modalOpen: !modalBool});
  }

  openModal() {
    <React.Fragment>
      <div>
        {modalOpen ? <CharityModal
          name={charity.name}
          img={charity.image}
          description={charity.description}
        /> : null}
      </div>
    </React.Fragment>
  }

  render() {
    const charities = this.props.charities;
    return(
      <React.Fragment>
        <div className="gallery-title">
          This bundle supports
        </div>
        <div className="gallery-images">
          {charities.map((charity, idx) => {
            return <li key={idx}>
              <img
                src={charity.image}
                onClick={() => toggleModal(charity.id)}
              ></img>
            </li>
          })}
        </div>
      </React.Fragment>
    )
  };

}

export default CharityList;