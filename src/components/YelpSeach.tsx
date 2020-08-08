import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function (props: any) {
  const [searchStr, setSearchStr] = useState(props.searchStr);
  function handleChange(e: any) {
    setSearchStr(e.target.value);
  }

  function onSubmit(e: any) {
    e.preventDefault();
    props.onSearch(searchStr);
  }

  return (
    <div>
      <form className='search-form' onSubmit={onSubmit}>
        <TextField
          className='search-input'
          id='filled-basic'
          label='Location'
          variant='filled'
          value={searchStr}
          onChange={handleChange}
        />
        <Button variant='contained' color='primary' type='submit'>
          Search
        </Button>
      </form>
    </div>
  );
}
