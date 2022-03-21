import React, { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifts(category).then(gifts => {
      setTimeout(() => {
        setState({
          data: gifts,
          loading: false,
        });
      }, 1000);
    });
  }, [category]);

  return state;
};
