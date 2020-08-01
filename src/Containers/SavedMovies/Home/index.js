import React, {useState, useRef} from 'react';
import {Header, SearchBar, MovieList, Toast} from '../../../Components';
import {COLORS} from '../../../Constants';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {saveOffline} from '../../Utils';
import {setLocalMovieListData} from '../../Movies/actions';
import {bindActionCreators} from 'redux';

const Home = (props) => {
  const {movieList, setLocalMovieListData} = props;
  const toastRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Wrapper>
      <Header>
        <SearchBar
          placeholder="Search Movies..."
          onChange={setSearchTerm}
          value={searchTerm}
        />
      </Header>
      <MovieList
        savedMovies
        movieList={
          searchTerm
            ? movieList.filter((movie) =>
                movie.Title.toLowerCase().includes(searchTerm.toLowerCase()),
              )
            : movieList
        }
        saveOffline={(item) =>
          saveOffline(item, movieList, setLocalMovieListData, toastRef)
        }
      />
      <Toast ref={toastRef} />
    </Wrapper>
  );
};

const mapStateToProps = ({moviesTabReducer}) => {
  return {
    movieList: moviesTabReducer.localMovieListData,
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    setLocalMovieListData: bindActionCreators(setLocalMovieListData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Home);

const Wrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.darkGray};
`;
