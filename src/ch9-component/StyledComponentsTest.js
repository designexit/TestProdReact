import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillApple } from 'react-icons/ai';

const StyledComponentsTest = () => {

  const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
  `;

  const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 500;

    // & 현재 요소
    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    // props를 이용할수 있음. 전달된 props 내용을 이용해서 조건부도 가능.
    ${props =>
      props.test &&
      css`
        background: none;
        border: 2px solid white;
        color: green;
        &:hover {
          background: white;
          color: yello;
        }
      `}

    // 형제 연산자, 버튼과 버튼 사이에 주는 효과 
    & + button {
      margin-left: 1rem;
    }
  `; // button 끝

  return (
    <div>
      {/* Box 라는 사용자 정의 컴포넌트에 props 전달 해보기.  */}
      <h1>
        test react-icons <AiFillApple />
      </h1>
      <Box color="red">
        <Button test={true}>hello</Button>
      </Box>
      <Box>
        <Button>속성 안주기 </Button>
      </Box>
      <Box color="violet">
        <Button test={true}>속성 주기 </Button>
        <Button>속성 안주기 </Button>
      </Box>
    </div>
  );
};

export default StyledComponentsTest;
