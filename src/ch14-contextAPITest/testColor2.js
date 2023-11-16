// 준비물 : createContext import, 전역으로 사용할 예제, 내보내기 하기

import { createContext, useState } from 'react';

//속성 예시1
// const ColorContext = createContext({ color: 'blue' });

// 속성 예시2 , 함수로 전달하기.
const ColorContext = createContext({
  // state 속성으로 값으로
  state: { color: 'aqua', subcolor: 'violet' },
  // actions 속성으로 함수로
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

//provider만들기
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('blue');
  const [subcolor, setSubcolor] = useState('red');
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const { Consumer: ColorConsumer } = ColorContext;
// 추가
// ColorProvider : setter , ColorConsumer : getter
export { ColorProvider, ColorConsumer };
// 내보내기
export default ColorContext;
