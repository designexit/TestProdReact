// 순서1 설정
import React, { useContext } from "react";
// 전역 속성 가져오기
import ColorContext from "./TestColor";
//예시2
//전역에서 설정한 속성 가져오기.
// Consumer 라는 속성을 이용해서, 전역의 값을 사용하기.
const TestColorBox = () => {
  //훅스로 더 쉽게, 전역의 값 이용하게.
  const { state } = useContext(ColorContext);
  return (
    <div>
      {
        <div>
          <div
            style={{
              width: "64px",
              height: "64px",
              // 임의의  value 매개변수(객체) 속성으로  color 가져오기
              // 파란색 박스 맞는지, 확인하기.
              // 예시1
              // background: value.color,
              // 예시2
              background: state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              // 예시2
              background: state.subcolor,
            }}
          >
            <div
              style={{
                width: "128px",
                height: "128px",
                // 예시2
                background: state.subcolor,
              }}
            >
              <div
                style={{
                  width: "256px",
                  height: "256px",
                  // 예시2
                  background: state.subcolor,
                }}
              ></div>
            </div>
          </div>
        </div>
        // )
      }
      
    </div>
  );
};

export default TestColorBox;
