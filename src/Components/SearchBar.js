import React from 'react';
import {StyleSheet, TextInput, Image} from 'react-native';
import styled from 'styled-components';
import {COLORS} from '../Constants';
import SearchIcon from '../Assets/Images/search.svg';
import LoaderIcon from '../Assets/Images/loader.gif';

const SearchBar = ({
  placeholder,
  isLoading = false,
  onChange = () => {},
  value = '',
}) => {
  return (
    <Wrapper>
      <SearchIcon fill={COLORS.lightGray} height={20} width={20} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        autoFocus={false}
        onChangeText={(text) => onChange(text)}
        value={value}
      />
      {!!isLoading && <Image source={LoaderIcon} style={styles.loader} />}
    </Wrapper>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  loader: {
    height: 20,
    width: 20,
  },
});

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${COLORS.white};
  border-radius: 5px;
  padding-horizontal: 12px;
`;
