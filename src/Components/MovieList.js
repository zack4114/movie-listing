import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import styled from 'styled-components';
import MovieCard from '../Components/MovieCard';
import {Text} from '../Components';
import NoMoviesIcon from '../Assets/Images/video-camera.svg';
import {COLORS} from '../Constants';

const MovieList = (props) => {
  const {
    movieList,
    savedMovies,
    saveOffline = () => {},
    offlineMoviesList,
  } = props;
  return (
    <Wrapper>
      <FlatList
        data={movieList}
        contentContainerStyle={styles.listStyle}
        renderItem={({item}) => (
          <MovieCard
            savedMovies={
              savedMovies ||
              !!offlineMoviesList.find((movie) => movie.imdbID == item.imdbID)
            }
            data={item}
            saveOffline={(item) => saveOffline(item)}
          />
        )}
        keyExtractor={(item) => `${item.imdbID}`}
        numColumns={2}
        columnWrapperStyle={styles.listColumnWrapperStyle}
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyListComponent}>
            <NoMoviesIcon height={100} width={100} fill={COLORS.lightGray} />
            <Text></Text>
            <Text fs={16} lh={30}>
              Oops, no movies found
            </Text>
          </View>
        )}
        keyboardShouldPersistTaps="handled"
      />
    </Wrapper>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  listColumnWrapperStyle: {
    justifyContent: 'space-between',
  },
  itemSeperator: {
    height: 20,
  },
  listStyle: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  emptyListComponent: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Wrapper = styled.View`
  flex: 1;
`;
