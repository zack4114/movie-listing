import React, {useRef, useEffect, useState, useCallback} from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header, SearchBar, MovieList, Toast} from '../../../Components';
import {setMoviesData, setLocalMovieListData} from '../actions';
import styled from 'styled-components';
import {COLORS} from '../../../Constants';
import Axios from 'axios';
import {saveOffline} from '../../Utils';

const Home = ({
  movieList,
  setMoviesListData,
  offlineMoviesList,
  setLocalMovieData,
}) => {
  const toastRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [searchTerm]);

  useEffect(() => {
    getOfflineData();
  }, []);

  const getData = useCallback(() => {
    setIsLoading(true);
    Axios.get(
      `https://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=${searchTerm}`,
    )
      .then((res) => {
        if (res.data.Response && res.data.Search) {
          setMoviesListData(res.data.Search);
        } else {
          setMoviesListData([]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setMoviesListData([]);
        setIsLoading(false);
      });
  }, [searchTerm]);

  const getOfflineData = async () => {
    try {
      const value = await AsyncStorage.getItem('offlineMovies');
      if (value !== null) {
        setLocalMovieData(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Header>
        <SearchBar
          placeholder="Search Movies..."
          onChange={setSearchTerm}
          value={searchTerm}
          isLoading={searchTerm && isLoading}
        />
      </Header>
      <MovieList
        movieList={movieList}
        saveOffline={(item) =>
          saveOffline(item, offlineMoviesList, setLocalMovieData, toastRef)
        }
        offlineMoviesList={offlineMoviesList}
      />
      <Toast ref={toastRef} />
    </Wrapper>
  );
};

const mapStateToProps = ({moviesTabReducer}) => {
  return {
    movieList: moviesTabReducer.movieListData,
    offlineMoviesList: moviesTabReducer.localMovieListData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMoviesListData: bindActionCreators(setMoviesData, dispatch),
    setLocalMovieData: bindActionCreators(setLocalMovieListData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Wrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.darkGray};
`;
