//hooks useState 확인

import React, { useState } from 'react';

const InfoTestUseState = () => {
  // state 상태, useState('초깃값') -> 결과는 2개를 반환
  // 1 name : state 상태값
  // 2 setName : 세터 함수를 반환. -> 업데이트를 하는 함수.
  // setName -> name 의 값을 업데이트 해줌.
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');

  //이벤트 핸들러 추가
  // 1. 이름 캐멀케이스 표기법, 2. 인자로는 함수 형태로 전달.
  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickName = e => {
    setNickName(e.target.value);
  };

  //결과 출력하기. 작성 문법은 JSX -> 기존 HTML 형식과 동일.
  // 리액트 컴포넌트는 대문자 시작,
  // 기존 DOM , 소문자 태그.
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>

      <div>
        <h1>이름 : {name}</h1>
      </div>
      <div>
        <h1>닉이름 : {nickname}</h1>
      </div>
    </div>
  );
};

export default InfoTestUseState;
