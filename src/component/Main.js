import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

// 확장팩 -> styled-components : 컴포넌트에서 좀 더 편하게 css 작업하는 모듈
// yarn add styled-components
import styled from 'styled-components';

// styled-component 사용 예제
// styled.원하는 태그 선택 (백틱)`` 사이에 문법 작성)

//Wrapper 라고 해서 블록 부분 설정.
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;

  &:after {
    content: '';
    width: 100%;
    height: 100vh;
    background: url(./festival.jpg) no-repeat 0 0;
    background-size: cover;
    filter: opacity(0.4);
  }
`;

// Container 만들기.
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 100%;
  /* max-width: 1280px; */

  z-index: 1;

h1 {
    margin: 0;
    text-align: center;
    color:#fff;
    font-size: 6rem;
    z-index: 1;
  }

  .btn {
    display: block;
    margin: 2rem auto;
    height: auto;
    padding: 0.7rem 1.8rem;
    font-size: 1.4rem;
    color: #fff;
    background-color: #46298e;
    border-radius: 10rem;
  }




`;

const Main = () => {
  //useNavigate라는 hooks를 사용해서 페이징하기
  const navigate = useNavigate();

  return (
    <div>
      <Wrapper>
        <Container>
          <h1>부산광역시 축제</h1>
          <Button className='btn' title="ApiBusanFestival" onClick={() => navigate('/ApiBusanFestival')} type='primary'>
            Busan Festival 자세히 보기
          </Button>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Main;
