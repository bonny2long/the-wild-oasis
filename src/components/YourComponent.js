import { styled } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export const StyledComponent = styled('div', {
  shouldComponentUpdate: prop => isPropValid(prop)
})`
  background: ${props => props.variation === 'primary' ? 'blue' : 'gray'};
`;