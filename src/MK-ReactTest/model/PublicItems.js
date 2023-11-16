import React from 'react';
import styled from 'styled-components';

// 부산테마먹거리 요소로 구성
// 기존 css 재사용

const NewsItemCss = styled.div`
  display: flex;
  margin-top: 5rem;
  padding-bottom: 30px;
  border-bottom: 1px solid #a396c3;

  .thumbnail {
    margin-right: 1.5rem;

    img {
      display: block;
      width: 170px;
      height: 130px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      width: 100%;
      flex-grow: 1;
      margin: 0;
      color: #46298e;
    }
    h3 {
      margin: 0.5rem 0 1rem;
      color: #888;
      font-weight: 500;
    }

    ul, li {
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }

    .itemSubInfo {
      padding-top: 0.5rem;
      border-top: 1px dashed #c3bad9;
    }

    .itemSubInfo li {
      display: flex;
      flex-wrap: nowrap; 
    }
    .itemSubInfo li p:first-child {
      flex-shrink:0;
      width: 100px;
      font-weight: 600;
    }
    .itemSubInfo li p + p {
      flex-grow: 1;
      padding-left: 26px;
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

const PublicItems = ({ article }) => {
  // article : 각 기사의 내용을 담은 객체.
  // 비구조화 할당으로 각 각 할당.
  const { MAIN_IMG_THUMB, MAIN_TITLE, TITLE, USAGE_DAY_WEEK_AND_TIME, CNTCT_TEL, TRFC_INFO,  } = article;
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
        <h3>{TITLE}</h3>
        <ul className='itemSubInfo'>
          <li>
            <p>일시 </p>
            <p>{USAGE_DAY_WEEK_AND_TIME}</p>
          </li>
          <li>
            <p>연락처 </p>
            <p>{CNTCT_TEL}</p>
          </li>
          <li>
            <p>교통정보 </p>
            <p>{TRFC_INFO}</p>
          </li>
        </ul>
      </div>
    </NewsItemCss>
  );
};

export default PublicItems;
