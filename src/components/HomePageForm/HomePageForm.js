import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './HomePageForm.scss';

const HomePageForm = ({ setSearchQuery }) => {
  const [value, setValue] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchQuery(value);
  };

  const handlerChange = e => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit} className="searchForm">
      <input
        type="text"
        placeholder="input movie..."
        onChange={handlerChange}
        value={value}
        className="searchForm__field"
      />
      <button type="submit" className="searchForm__btn">
        search
      </button>
    </form>
  );
};

HomePageForm.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default HomePageForm;
