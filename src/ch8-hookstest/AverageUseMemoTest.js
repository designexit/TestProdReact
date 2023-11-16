import { Button } from 'antd';
import React, { useMemo, useState } from 'react';

const doAverage = numbers => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseMemoTest = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

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
