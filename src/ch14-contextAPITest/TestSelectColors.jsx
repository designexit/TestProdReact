import React from "react";
import { ColorConsumer } from "./TestColor";

//전역의 설정 값 또는 함수를 사용하기.
// Consumer = 게터, Provider = 세터  , 비슷한 역할을 한다.

const colors = ["red", "orange", "blue", "indigo", "violet", "aqua", "navy"];

const TestSelectColors = () => {
  return (
    <div>
      <h2>색상 선택하기</h2>
      {/* 적용하기, 액션을 가져와서 이용하기. */}
      <ColorConsumer>
        {
          //시작
          ({ actions }) => (
            <div style={{ display: "flex" }}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    background: color,
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                  }}
                  //이벤트 핸들러 추가하기, 전역의 함수를 사용하기.
                  onClick={() => actions.setColor(color)}
                  // 우클릭 이벤트 핸들러 추가하기.
                  onContextMenu={(e) => {
                    // 우클릭 메뉴가 뜨는 게 기본인데, 기본 동작을 막음.
                    e.preventDefault();
                    actions.setSubcolor(color);
                  }}
                />
              ))}
            </div>
          )
          // 함수 끝부분
        }
        {/* 끝 */}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default TestSelectColors;
