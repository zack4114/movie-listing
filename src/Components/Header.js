import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {COLORS} from '../Constants';
import Text from '../Components/Text';

const Header = ({heading, children}) => {
  return (
    <SafeAreaView>
      <Wrapper>
        <Text>{heading}</Text>
        {children}
      </Wrapper>
    </SafeAreaView>
  );
};

export default React.memo(Header);

const Wrapper = styled.View`
  background-color: ${COLORS.black};
  min-height: 60px;
  padding: 12px;
  justify-content: center;
  align-items: center;
`;
