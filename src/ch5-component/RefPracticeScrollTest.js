//ref속성으로 확인 많이 하는 부부 : scroll, input focus

import { Button } from 'antd';
import React, { useRef } from 'react';
import styled from "styled-components"

const RefPracticeScrollTest = () => {
  const box = useRef(null);
  const StyleBox = styled.div`
  border:1px solid black;
  height: 300px;
  width: 300px;
  overflow: auto;
  position: relative;
  `;
  const InnerStyleBox = styled.div`
  height: 650px;
  width: 100%;
  background: linear-gradient(aqua, coral);
  `;

  return (
    <div>
      <StyleBox ref={box}>
        <InnerStyleBox>
        </InnerStyleBox>
      </StyleBox>
      <Button title='맨밑으로' type='primary' danger onClick={() => box.current.scrollTop=350}>맨밑으로 이동하기</Button>
      <Button title='맨위으로' type='primary' onClick={() => box.current.scrollTop=0}>맨위으로 이동하기</Button>
    </div>
  );
};

export default RefPracticeScrollTest;