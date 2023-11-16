import { Button } from 'antd';
import React, { Component } from 'react';

class LifeCycle extends Component {
  //클래스형 컴포넌트에 사용되는 초기값 세팅
  //함수형 컴포넌트 비교
  //생명주기 알아보기 예제
  //const [number, setNumber] = useState(0)
  state = {
    number:0,
    color:null
  };

  myRef = null;
  //생성자 호출
  constructor(props) {
    super(props)
    console.log("constructor 호출")
  }

  //생명주기 2번째
  static getDerivedStateFromProps (nextProps, prevState){
    console.log("getDerivedStateFromProps 2번째 호출");
    if(nextProps.color !== prevState.color) {
      return{color: nextProps.color};
    }
    return null;
  }

  //4번째 호출
  componentDidMount() {
    console.log("4번째 호출 : componentDidMount가 완료 되었어요.");
  }

  //업데이트 변경
  shouldComponentUpdate(nextProps, nextState) {
    console.log("2번째 호출 : shouldComponentUpdate 호출.", nextProps, nextState);
    //숫자가 1의 자리가 4면 리렌더링 안함
    return nextState.number % 10 !== 4;
  }

  //언마운트 하나뿐 
  componentWillUnmount() {
    console.log("하나뿐 : componentWillUnmount 호출.");
  }

  //업데이트 4번째 호출
  getSnapshotBeforeUpdate(prevPros, prevState) {
    console.log ("getSnapshotBeforeUpdate 스냅샷 확인", prevPros.color, this.props.color);
    if(prevPros.color !== this.props.color) {
      //myRef특정 태그 요소를 가리키거나 작업시 사용
      //적용부분
      return this.myRef.style.color;
    }
    return null;
  }

  //5번째 호출, 업데이트가 완료
  componentDidUpdate(prevPros, prevState, snapshot) {
    console.log("5번째 호출 : componentDidUpdate 호출.", prevPros, prevState);
    if (snapshot) {
      console.log ("업데이트 되기 전 색상 :", snapshot);
    }
  }

  //이벤트 핸들러 추가, 숫자 변경
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };



  render() {
    console.log ("3번째 호출 render : 마운트 또는 업데이트 호출시");

    //기본 스타일링
    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref = { (ref) => (this.myRef = ref) }>number 값 조회 : {this.state.number}</h1>
        <p>color : {this.state.color}</p>
        <Button type='primary' onClick={this.handlerClick}>더하기 +1</Button>
      </div>
    );
  }
}

export default LifeCycle;