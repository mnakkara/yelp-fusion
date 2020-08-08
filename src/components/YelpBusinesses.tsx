import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YelpCard from './YelpCard';

export default function YelpBusinesses(props: any) {
  const [list, setList] = useState([]);
  const host = 'https://yelp-fusion-api.herokuapp.com/';
  // if running server locally, use below host url instead
  //'http://localhost:3001/';

  useEffect(() => {
    axios
      .get(
        `${host}businesses/search?location=${props.searchStr}&term=icecream&limit=5`
      )
      .then((resp) => {
        setList(resp.data);
      })
      .catch((e) => console.log('Error :', e));
  }, [props.searchStr]);

  const listRender = list.map((business: any) => {
    return <YelpCard key={business.id} business={business}></YelpCard>;
  });

  return <div className='business-list'>{listRender}</div>;
}
