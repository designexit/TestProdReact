import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from '../model/NewsItem';
import axios from 'axios';
import PublicItem from "../model/PublicItem";
import PublicItem2 from "../model/PublicItem2";

// 뉴스아이템 요소의 출력을 감사는 목록부분에 해당, 미디어쿼리를 넣어서 반응형으로 특정 크기를 기준으로 웹 브라우저 크기 변경 화면사이즈 적용

const NewsListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {

  const [articles, setArticles] = useState(null);

  const [loading, setLoading] = useState(false);

  //상태변수, 뉴스(0), 공공데이터(1,2)에 따라서
  const [datatype, setDatatype] = useState(0);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);

      try {
        // 카테고리별로, url 주소 변경하기.
        const query = category === "all" ? "" : `&category=${category}`;
        // 부산테마먹거리 API 주소, busanFood
        // 리팩토링은 잠시 대기.
        // const query2 = category === "busanFood" ? `FoodService/getFoodKr` : "";
        // const query3 = category === "busanWalking" ? `WalkingService/getWalkingKr` : "";
        // const response = await axios.get(
        //   `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
        // );
        switch (query) {
          case "":
            // 뉴스 API 주소 전체 주제
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr&apiKey=2be590e446e8425aa5970643d8799a76`
            );
            setArticles(response.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=business":
            // 뉴스 API 주소 business 주제
            const response_business = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2be590e446e8425aa5970643d8799a76`
            );
            setArticles(response_business.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=entertainment":
            // 뉴스 API 주소 entertainment 주제
            const response_entertainment = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_entertainment.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=health":
            // 뉴스 API 주소 health 주제
            const response_health = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2be590e446e8425aa5970643d8799a76`
            );
            setArticles(response_health.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=science":
            // 뉴스 API 주소 science 주제
            const response_science = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2be590e446e8425aa5970643d8799a76`
            );
            setArticles(response_science.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=sports":
            // 뉴스 API 주소 sports 주제
            const response_sports = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2be590e446e8425aa5970643d8799a76`
            );
            setArticles(response_sports.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=technology":
            // 뉴스 API 주소 technology 주제
            const response_technology = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2be590e446e8425aa5970643d8799a76`
            );
            setArticles(response_technology.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=busanFood":
            const response3 = await axios.get(
              `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json`
            );
            setArticles(response3.data.getFoodKr.item);
            // 상태변수, 타입 지정.
            setDatatype(1);
            break;
          case "&category=busanWalking":
            // 부산도보여행 API 주소, busanWalking
            const response4 = await axios.get(
              `https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&pageNo=1&numOfRows=100&resultType=json`
            );
            setArticles(response4.data.getWalkingKr.item);
            // 상태변수, 타입 지정.
            setDatatype(2);
            break;
          default:
            alert("카테고리를 선택해주세요.");
        }


      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; 
    resultData();
 
  }, [category]); 
  if (loading) {
    return <NewsListCss>데이터 받는중(대기중 ....)</NewsListCss>;
  }

  if (!articles) {
    return null;
  }

  const choosePage = ({ articles }) => {
    switch (datatype) {
      case 0:
        return (
          <div>
            {articles.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </div>
        );
      case 1:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem2 key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );
      default:
        return;
    }
  };

  return (
    <NewsListCss>
      {choosePage({ articles })}
    </NewsListCss>
  );
};

export default NewsList;
