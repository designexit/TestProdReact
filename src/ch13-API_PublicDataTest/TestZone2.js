function printHello() {
  console.log('Hello World');
}

//setTimeout(콜백함수, 기다리는 시간):기다리는 시간 후에 콜백함수 실행
//작업1
setTimeout(printHello, 3000);
//작업2
console.log('대기중입니다.');

//포인트, 비동기적으로 다 같이 실행 후, 작업이 완료가 되는대로 호출이 됨
//실행 단축키 : ctrl+opt+N

//콜백함수 지옥 모양 보기
function decrease(number, callbackFuncthion) {
  setTimeout(() => {
    const result = number - 1;
    if (callbackFuncthion) {
      callbackFuncthion(result);
    }
  }, 1000);
}

decrease(0, result => {
  console.log(result);
});

console.log('작업시작');
decrease(0, result => {
  console.log(result);
  decrease(result, result => {
    console.log(result);
    decrease(result, result => {
      console.log(result);
      decrease(result, result => {
        console.log(result);
        console.log('작업완료');
      });
    });
  });
});

//promise로 개선하기
function decrease2(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number - 1;
      if (result < 50) {
        const error = new Error('error');
        return reject(error);
      }
      resolve(result);
    }, 1000);
  });
}

decrease2(60)
  .then(number => {
    console.log(number);
    return decrease2(number);
  })
  .then(number => {
    console.log(number);
    return decrease2(number);
  })
  .then(number => {
    console.log(number);
    return decrease2(number);
  })
  .then(number => {
    console.log(number);
    return decrease2(number);
  })
  .catch((e)=> console.log(e))

  async function test() {
    try {
      let result = await decrease2(60);
      console.log(result);
  
      result = await decrease2(result);
      console.log(result);
  
      result = await decrease2(result);
      console.log(result);
  
      result = await decrease2(result);
      console.log(result);
  
      result = await decrease2(result);
      console.log(result);
  
      result = await decrease2(result);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
  
  //작업1
  console.log("작업시작 ,async await 이용해서 가독성 더 높이기");
  // 작업2 , 비동기로 확인.
  test();
