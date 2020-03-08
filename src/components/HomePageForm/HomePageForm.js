import React, { useState } from 'react';

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
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="input movie..."
        onChange={handerChange}
        value={value}
      />
      <button type="submit">find</button>
    </form>
  );
};

export default HomePageForm;
