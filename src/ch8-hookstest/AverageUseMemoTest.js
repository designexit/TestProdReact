// array = [1,2,3,4,5]
// array.reduce((a,b) => a+b,0)
// 의 결과값은 -> 15
// a : 누산기,(누적된값)
// a : 0 , b : 1 => 1
// a : 1 , b : 2 => 3
// a : 3 , b : 3 => 6
// a : 6 , b : 4 => 10
// a : 10 , b : 5 => 15

import { Button } from 'antd';
import React, { useMemo, useState } from 'react';

//샘플함수 : 특전 연산하는 과정을 샘플로 만들고 useMemo를 사용하기 전, 후 과정 보기
const doAverage = numbers => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseMemoTest = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  //이벤트 핸들러
  const onChange = e => {
    setNumber(e.target.value);
  };

  //숫자 추가하기
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  //임의로 결과값을 만들어서 이 값이 변경시에만 연산 계산
  const avgResult = useMemo(() => doAverage(list),[list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <Button onClick={onInsert}>등록하기 </Button>
      {/* 리액트 리스트 출력시, 키가 의무적으로 설정 주의하기. */}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      {/* 연산의 결과  */}
      {/* <div>평균값 : {doAverage(list)}</div> */}
      <div>평균값 : {avgResult}</div>
    </div>
  );
};

export default AverageUseMemoTest;
