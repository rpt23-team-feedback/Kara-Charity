import React, { Fragment, Component } from 'react';
import CharityModal from './CharityModal.jsx';
import styled from 'styled-components';

const GalleryTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
`;

const GalleryImages = styled.div`
  display: flex;
  max-width: 50%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const GalleryImage = styled.img`
  width: 50%;
`;

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
        <GalleryTitle>
          This bundle supports
        </GalleryTitle>
        <GalleryImages>
          {charities.map((charity, idx) => {
            return <li key={idx}>
              <GalleryImage
                src={charity.image}
                onClick={() => this.toggleModal(idx)}
              ></GalleryImage>
            </li>
          })}
        </GalleryImages>
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