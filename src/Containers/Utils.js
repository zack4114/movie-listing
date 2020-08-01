import {AsyncStorage} from 'react-native';

export const saveOffline = async (
  item,
  offlineMoviesList,
  setLocalMovieData = () => {},
  toastRef,
) => {
  const type = !!offlineMoviesList.find((movie) => movie.imdbID == item.imdbID)
    ? 'remove'
    : 'add';
  const temp = [...offlineMoviesList];
  const updatedData =
    type == 'add'
      ? [...temp, item]
      : temp.filter((movie) => movie.imdbID != item.imdbID);
  const successMessage =
    type == 'add'
      ? 'Movie added to favourites'
      : 'Movie removed from favourites';
  const failureMessage =
    type == 'add'
      ? 'Unable to add movie to favourites'
      : 'Unable to remove movie from favourites';
  try {
    setLocalMovieData(updatedData);
    await AsyncStorage.setItem('offlineMovies', JSON.stringify(updatedData));
    toastRef.current.show(successMessage);
  } catch (error) {
    console.log(error);
    toastRef.current.show(failureMessage);
    setLocalMovieData([...temp]);
  }
};
