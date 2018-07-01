import React, { Component } from 'react';
import PageWrapper from '../../components/PageWrapper/index';
import Header from '../../components/header';
import FlexWrapper from '../../components/flexContainer';
import styled from 'styled-components';

const Column = styled.div`
  flex: 1 0 50%;
`;

class PlayerContainer extends Component {

  render() {
    return (
      <PageWrapper debug={true} >

        <h1 style={ {
          textAlign: 'center',
          fontSize: '2.4rem'
        } }>Player Name</h1>

        <Header />

        <FlexWrapper>
          <Column>
            <div>player info</div>
            <div>player quick stats</div>
          </Column>

          <Column>
            <div>player stats</div>
            <div>hp details</div>
            <div>spells</div>
          </Column>
        </FlexWrapper>

      </PageWrapper>
    );
  }

}

export default PlayerContainer;