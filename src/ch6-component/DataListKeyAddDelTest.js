import { Button } from 'antd';
import React, { useState } from 'react';

const DataListKeyAddDelTest = () => {
  const [testArr, setTestArr] = useState (
    [{id:1, text:"스프링"}, 
    {id:2, text:"스프링부트"}, 
    {id:3, text:"안드로이드"}, 
    {id:4, text:"리액트"}]
  );

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const testArrList = testArr.map((item) => <li 
  key={item.id}
  onDoubleClick={() => onRemoveText(item.id)}>{item.text}</li>);

  const onChangeText = e => setInputText(e.target.value);

  const onClickText = () => {
    const nextTestArr = testArr.concat(
      {id : nextId,
      text : inputText
      }
    )
    setNextId(nextId + 1);
    setTestArr(nextTestArr);
    setInputText("");
  }

  const onRemoveText = (id) => {
    const nextTestArr2 = testArr.filter((item) => item.id !== id);
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