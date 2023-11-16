import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

const NewsPage = () => {
  const params = useParams();

  const category = params.category || "all"

  return (
    <div>
      <Categories/>
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;