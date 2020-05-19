import React, { useState } from 'react';
import './HomePageForm.scss';

const HomePageForm = ({ setSearchQuery }) => {
  const [value, setValue] = useState('');

  const handerChange = e => {
    setValue(e.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchQuery(value);
  };

  return (
    <form onSubmit={handlerSubmit} className="searchForm">
      <input
        type="text"
        placeholder="input movie..."
        onChange={handerChange}
        value={value}
        className="searchForm__field"
      />
      <button type="submit" className="searchForm__btn">
        search
      </button>
    </form>
  );
};

export default HomePageForm;
