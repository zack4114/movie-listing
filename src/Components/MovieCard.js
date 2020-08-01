import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import {COLORS} from '../Constants';
import Text from '../Components/Text';
import DoubleTappable from './DoubleTap';

const MovieCard = ({data, savedMovies, saveOffline}) => {
  return (
    <DoubleTappable onDoubleTap={() => saveOffline(data)}>
      <Wrapper>
        <ImageBackground
          source={{uri: data.Poster}}
          style={styles.backgroundImageStyle}
          resizeMode="cover"
        />
        <Content>
          <Text fs={16} lh={27} bold>
            {data.Title}
          </Text>
          <Text></Text>
          {!!data.Year && <Text>( {data.Year} )</Text>}
          <Text>{data.Director}</Text>

          <LikedView>
            <MaterialCommunityIcons
              name={savedMovies ? 'heart' : 'heart-outline'}
              color={savedMovies ? COLORS.red : COLORS.white}
              size={20}
            />
          </LikedView>
        </Content>
      </Wrapper>
    </DoubleTappable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  backgroundImageStyle: {flex: 1, opacity: 0.4, borderRadius: 5},
});

const Wrapper = styled.View`
  width: 48%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 4px ${COLORS.black};
  background-color: rgba(0, 0, 0, 0.8);
  elevation: 5;
`;

const Content = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 12px;

  flex: 1;
`;

const LikedView = styled.View`
  position: absolute;
  bottom: 12px;
  right: 12px;
`;
