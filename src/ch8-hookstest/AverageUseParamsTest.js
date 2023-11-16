import { Button } from 'antd';
import React, { useCallback, useMemo, useState, useRef} from 'react';

//샘플함수 : 특전 연산하는 과정을 샘플로 만들고 useMemo를 사용하기 전, 후 과정 보기
const doAverage = numbers => {
  console.log('평균값 계산중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseParamsTest = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputElement = useRef(null);

  //이벤트 핸들러
  const onChange = useCallback(e => {
    console.log('useCallback 확인중.onChange 호출');
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    console.log('useCallback 확인중.onInsert  호출');
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputElement.current.focus();
  }, [number, list]);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  //임의로 결과값을 만들어서 이 값이 변경시에만 연산 계산
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputElement} onKeyPress={onKeyPress} />
      <Button type='primary' onClick={onInsert}>등록하기 </Button>
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

export default AverageUseParamsTest;
