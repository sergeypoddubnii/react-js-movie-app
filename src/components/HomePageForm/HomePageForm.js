import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './HomePageForm.scss';

const HomePageForm = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');
  const btnRef = useRef();

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue('');
  };

  const handlerChange = e => {
    setInputValue(e.target.value);
    if (e.target.value.trim().length !== 0) {
      btnRef.current.disabled = false;
    }
    if (e.target.value.trim().length === 0) {
      btnRef.current.disabled = true;
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="searchForm">
      <input
        type="text"
        placeholder="input movie..."
        onChange={handlerChange}
        value={inputValue}
        className="searchForm__field"
      />
      <button
        type="submit"
        className="searchForm__btn"
        ref={btnRef}
        disabled={true}
      >
        search
      </button>
    </form>
  );
};

HomePageForm.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default HomePageForm;
