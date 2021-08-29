import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalContainer = styled.div`
  color: #36363f;
  background: #36363f;
  position: relative;
  display: block;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
  width: 33%;
  border-radius: .5rem;
`;

const CharityTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
`;

const InnerModalContainer = styled.div`
  background: #29292e;
  position: relative;
  display: block;
  margin: 0 auto;
  width: 95%;
  height: 50%;
`;

const Xout = styled.div`
  display: block;
  float: right;
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
`;

const CharityImage = styled.img`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: .9rem;
`;

const CharityDescription = styled.div`
  display: block;
  color: white;
  font-size: .85rem;
  padding: .8rem;
  // margin-bottom: 1rem;
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
          <InnerModalContainer>
            <CharityImage src={this.props.image}></CharityImage>
            <CharityDescription>
              {this.props.description}
            </CharityDescription>
          </InnerModalContainer>
          .
        </ModalContainer>
      </ModalBackdrop>
    )
  }
}

export default CharityModal;