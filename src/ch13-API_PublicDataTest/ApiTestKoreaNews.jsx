import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";

//한국 뉴스
// 카테고리 : 샘플 business
// https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=87af28a1123a4fcc9c869c0b81bd243c

const ApiTestKoreaNews = () => {
  // REST API 서버에서, 임시로 받아온 data , state 로 확인하기.
  const [data, setData] = useState(null);
  // 이벤트 핸들러
  // 비동기 함수로 구현할 함수앞에 키워드 : async 붙이기.
  const onClick = async () => {
    try {
      // await 는 Promise 를 반환하는 함수 앞에 사용
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=87af28a1123a4fcc9c869c0b81bd243c"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Button type="primary" onClick={onClick}>
        가져오기
      </Button>
      <div>
        {data && (
          <textarea
            rows={8}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default ApiTestKoreaNews;