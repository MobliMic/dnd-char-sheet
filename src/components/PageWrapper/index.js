import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  ${ props => props.debug ? `
    * { border: 1px solid red; }
  ` : '' }
`;

export default PageWrapper;