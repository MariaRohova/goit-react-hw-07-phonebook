import React from 'react';
import { FilterStyle } from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterReducer';

const Filter = () => {
  const filterFormStore = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };
  return (
    <FilterStyle>
      <span>Find contacts by name</span>
      <input
        onChange={handleChange}
        value={filterFormStore}
        type="text"
        name="filter"
      />
    </FilterStyle>
  );
};

export default Filter;
