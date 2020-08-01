import styled from 'styled-components';
import {COLORS, DEFAULT_FONT_SIZE, DEFAULT_LINE_HEIGHT} from '../Constants';

export default styled.Text`
  ${({color}) => `color:${color || COLORS.white}`};
  ${({fs}) => `font-size: ${fs || DEFAULT_FONT_SIZE}px`};
  ${({lh}) => `line-height: ${lh || DEFAULT_LINE_HEIGHT}px`};
  ${({bold}) => bold && 'font-weight:bold'}
`;
