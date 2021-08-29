import React, { Fragment, Component } from 'react';
import CharityModal from './CharityModal.jsx';
import styled from 'styled-components';

const GalleryTitle = styled.div`
  color: #f6f3f3;
  font-size: 1.3rem;
  text-align: center;
  font-family: Helvetica;
  font-weight: 900;
  padding: 2rem;
`;

const GalleryImages = styled.div`
  display: flex;
  max-width: 65%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
`;

const GalleryImage = styled.img`
  width: 90%;
  padding: .5rem;
`;

class CharityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      charityData: null
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(i) {
    this.setState({
      modalOpen: true,
      charityData: this.props.charities[i]
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const charities = this.props.charities;
    const charityData = this.state.charityData;
    const modalOpen = this.state.modalOpen;
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
                onClick={() => this.openModal(idx)}
              ></GalleryImage>
            </li>
          })}
        </GalleryImages>
        <div>
          {modalOpen ? <CharityModal
            name={charityData.name}
            image={charityData.image}
            description={charityData.description}
            modalClose={() => this.closeModal()}
          /> : null}
        </div>
      </React.Fragment>
    )
  };

}

export default CharityList;