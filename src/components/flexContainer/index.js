import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  ${ props => props.column ? `
    flex-direction: column;
  ` : `
    flex-direction: row;
  ` }
`;

export default FlexWrapper;
