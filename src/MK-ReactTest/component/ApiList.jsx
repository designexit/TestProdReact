import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PublicItems from '../model/PublicItems';

// css
const Heading = styled.h1`
  width:100%;
  margin: 0;
  padding: 20px 0;
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
  background-color: #46298e;
`

const ApiListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 10%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

`;

const ApiList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        // 카테고리별로, url 주소 변경하기.
        //const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=RLYMOl/sY2UzEa9ZtGd074Ll0fGRry8cSzp2iqOdc6a6iVTHaOjceKdhlJo2OpuTkySx3jtnkMJbJkpDoHJBxw==&pageNo=1&numOfRows=100&resultType=json`,
        );
        setArticles(response.data.getFestivalKr.item);

        //console.log(response.data)
        // 해당 주소를 입력해서, 모델링 조사할 때, 이미 구조를 다 봤음.
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; // resultData async 함수 블록 끝부분,
    // 비동기 함수 만들어서, 사용하기.
    resultData();
  }, [category]);

  if (loading) {
    return <ApiListCss>데이터 받는중(대기중 ....)</ApiListCss>;
  }
  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return null;
  }

  return (
    <div>
      <Heading>Busan Festival</Heading>
      <ApiListCss>
        {articles.map(article => (
          <PublicItems key={article.MAIN_IMG_THUMB} article={article} />
        ))}
      </ApiListCss>
    </div>
    
  );
};

export default ApiList;
