import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const CharityTitle = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const CharityImage = styled.img`
  display: flex;
`;

const CharityDescription = styled.div`
  font-size: 1rem;
`;

class CharityModal extends React.Component {
  render() {
    <ModalContainer>
      <CharityTitle>
        {this.props.name}
      </CharityTitle>
      <div className="charity-image" url={this.props.image}></div>
      <CharityDescription>
        {this.props.description}
      </CharityDescription>
    </ModalContainer>
  }
}

export default CharityModal;