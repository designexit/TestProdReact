//내장 함수
// concat, filter, map : 함수들의 특징.
// 결론, 새로운 배열을 생성한다.
// 데이터와 연동을 해서 생각.
// 리스트의 요소를 출력할 때, key 라는 부분이 필요.
// 마치, 데이터베이스 인덱스 개념과 비슷.
// 인덱스 있으면, 인덱스를 기준으로 검색해서 빠름.
// 만약, 인덱스 없으면, 풀 스캔을 해야함. 작업의 효율성부분 문제됨.
// 리액트에서 특정의 데이터를 리스트로 출력시, 이런 인덱스 부분 설정.
// 인덱스는 , 반복이 가능한 iterable 한 그룹을 처리하기는 하지만,
// 유니크 , 중복 되면 안됩니다.
// 데이터베이스 pk 처럼 사용하면 됩니다.
// SQL->RDBMS -> 각 테이블 마다, PK 존재함. 그래서, 이 값을 인덱스로 사용하면됨.
// No SQL -> MongoDB (Object ID) -> PK 사용하면 됨.
// 결론, 데이터 연동해서, 리스트 출력시 key 설정 반드시 해야함.

import { Button } from 'antd';
import React, { useState } from 'react';

const DataListKeyAddDelTest = () => {
  //test : 상태값, 타입 : 배열, 요소타입 : 객체
  //초기값으로 배열로 기본 4개의 객체 (더미데이터))
  const [testArr, setTestArr] = useState (
    [{id:1, text:"스프링"}, 
    {id:2, text:"스프링부트"}, 
    {id:3, text:"안드로이드"}, 
    {id:4, text:"리액트"}]
  );

  const [inputText, setInputText] = useState("");
  //기본 아이디 4까지 사용하고 그호 id 5부터
  const [nextId, setNextId] = useState(5);

  //list출력하기 : 원래는 리스트 컴포넌트와 리스트 아이템 컴포넌트로 나뉨
  //key는 의무사항
  // const testArrList = testArr.map((item) => <li key={item.id}>{item.text}</li>);

  //삭제기능 추가
  const testArrList = testArr.map((item) => <li 
  key={item.id}
  onDoubleClick={() => onRemoveText(item.id)}>{item.text}</li>);



  //data 추가
  // text input 부분이 변경 시 세터 함수로 변경사항을 업데이트 함
  const onChangeText = e => setInputText(e.target.value);

  const onClickText = () => {
    const nextTestArr = testArr.concat(
      //기본 값 id 5
      {id : nextId,
        // 입력된 내용이 계속 변경을 감지하면서 최종 단어가 입력됨
      text : inputText
      }
    )
    setNextId(nextId + 1);
    setTestArr(nextTestArr);
    setInputText("");
  }

  //data 삭제
  //해당 아이템 더블 클릭해서 삭제
  //filter함수 이용
  const onRemoveText = (id) => {
    // item.id !== id 틀리면 참, 같으면 거짓
    // filter(콜백함수 (조건)) : 조건이 참이 되는 요소만 뽑아서 새로운 배열을 만든다
    const nextTestArr2 = testArr.filter((item) => item.id !== id);

    //필터가 된 (요소를 제거한) 새로운 배열 출력
    setTestArr(nextTestArr2);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickText();
    }
  };




  return (
    <div>
      <input value={inputText} onChange={onChangeText} onKeyPress={onKeyPress}/><Button type='primary' onClick={onClickText}>추가</Button>
      <ul>
      {testArrList}
      </ul>
      
    </div>
  );
};

export default DataListKeyAddDelTest;