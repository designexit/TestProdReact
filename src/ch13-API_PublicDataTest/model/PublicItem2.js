import React from 'react';
import styled from 'styled-components';

// 부산도보여행 요소로 구성
// 기존 css 재사용

const NewsItemCss = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 170px;
      height: 130px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: blue;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  // & : 현재 요소 , 각 뉴스 목록의 요소
  // 각 뉴스 아이템 요소가 배치가 될때, 간격을 주겠다.
  // & + & : 형제 연산자, 요소의 이웃, 같은 요소를 나열 시.
  //
  & + & {
    margin-top: 3rem;
  }
`;

const PublicItem2 = ({ article }) => {
  // article : 각 기사의 내용을 담은 객체.
  // 비구조화 할당으로 각 각 할당.
  const { MAIN_TITLE, TRFC_INFO, ITEMCNTNTS, MAIN_IMG_THUMB } = article;
  return (
    <NewsItemCss>
      {/* 조건부 렌더링으로 출력하기.  */}

      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          {/* 링크 클릭시, target="_blank" : 새창 으로 열기 
          rel="noopener noreferrer" : 새창으로 열었을 때, 
          원본 링크의 참조라든지, 개인 정보 부분을 막아주기. */}

          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>교통정보 : {TRFC_INFO}</p>
        <p>설명 : {ITEMCNTNTS}</p>
      </div>
    </NewsItemCss>
  );
};

export default PublicItem2;
