import React, { useCallback, useState } from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

const MainNews = () => {
  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => {
    setCategory(category)
  },[])


  return (
    <div>
      {/* 부모 컴포넌트에서 자식 컴포넌트(Categories, NewsList)로  props 속성으로 전달 1)선택된 카테고리 값, 2)카테고리를 선택하는 함수 전달 */}
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category}></NewsList>
    </div>
  );
};

export default MainNews;