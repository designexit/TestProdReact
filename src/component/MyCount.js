//함수형 컴포넌트
// +1, -1 은 동일하고 state 구현방법이 좀 다름
//useState 라는 hooks를 미리 사용


import React, { useState } from 'react';

const MyCount = () => {
  //state를 할당하는 부분 -> useState사용
  const [number, setNumber] = useState(0);
  const [anotherNumber, setAnotherNumber] = useState('');
  //useState의 결과값 타입이 배열
  // useState(0); -> 초기값은 0 (안하고 싶으면 useState(' ');)
  return (
    <div>
      <h1>{number}</h1>
      <h2>anotherNumber : {anotherNumber}</h2>
      <button
        // onClick 의 값으로 함수를 사용
        onClick={() => {
          setNumber({ number: number + 1 });

          // 값이 2씩 증가 -> 바로 반영이 안됨 
          // this.setState({number : this.state.number + 1});
          // 해결책으로 객체 대신에 함수로 대체
          setNumber((prevState) => {
            return {
              number : prevState.number + 1,
            };

          },
          () => {
            console.log("state값 변경 후 함수 호출")
          }
          );
        }}
      >
        {" "}
        +1{" "}
      </button>
      <button
        // onClick 의 값으로 함수를 사용
        onClick={() => {
          setNumber({ number: number - 1 });
        }}
      >
        {" "}
        -1{" "}
      </button>
    </div>
  );
};

export default MyCount;
