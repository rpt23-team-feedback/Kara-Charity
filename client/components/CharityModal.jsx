import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  transition: all .7s ease;
`;

const ModalContainer = styled.div`
  display: block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

const CharityTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem;
`;

const Xout = styled.div`
  display: inline-block;
  align-items: right;
  color: white;
  font-size: 1.5rem;
  text-align: right;
`;

const CharityImage = styled.img`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

const CharityDescription = styled.div`
  color: white;
  font-size: 1.25rem;
  padding: 2rem;
`;

class CharityModal extends React.Component {
  constructor(props) {
    super(props)
  }

  xOut() {
    this.props.modalClose();
  }

  render() {
    return(
      <ModalBackdrop onClick={() => {this.xOut()}}>
        <ModalContainer>
          <CharityTitle>
            {this.props.name}
            <Xout onClick={() => {this.xOut()}}>X</Xout>
          </CharityTitle>
          <CharityImage src={this.props.image}></CharityImage>
          <CharityDescription>
            {this.props.description}
          </CharityDescription>
        </ModalContainer>
      </ModalBackdrop>
    )
  }
}

export default CharityModal;