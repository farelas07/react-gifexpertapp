import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState('cars');

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        <GifGrid key={categories} category={categories} />
      </ol>
    </>
  );
};
