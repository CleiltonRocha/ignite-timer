import styled from 'styled-components'

export const LayoytContainer = styled.div`
  min-width: 70rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 901px) and (max-width: 1199px) {
    min-width: auto;
  }

  @media only screen and (min-width: 601px) and (max-width: 900px) {
    min-width: auto;
  }

  @media only screen and (max-width: 600px) {
    min-width: auto;
  }
`
