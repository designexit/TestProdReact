import { Button } from 'antd';
import React, { useReducer } from 'react';

//설정1, 리듀서 함수 만들기.
// state : 상태값,
// action : 무엇을 실행할지 표시 ex) 증가: "INCREMENT" , 감소 : "DECREMENT"
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const CountUseReducerTest = () => {
  const [state,dispatch] = useReducer(reducer,{value:0})
  return (
    <div>
      {/* 결과 뷰 출력하기 */}
      <p>
        {" "}
        현재 값 : <b>{state.value}</b>
      </p>
      {/* 적용하기, dispatch 함수 호출 해서, 해당 액션 문자열 사용하기. */}
      <Button type="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
        +1 증가
      </Button>
      <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
        -1 감소
      </Button>
    </div>
  );
};

export default CountUseReducerTest;