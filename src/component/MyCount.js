import React, { useState } from 'react';

const MyCount = () => {
  //state를 할당하는 부분 -> useState사용
  const [number, setNumber] = useState(0);
  const [anotherNumber] = useState('');
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
