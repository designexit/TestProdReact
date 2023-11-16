import { Button } from 'antd';
import React, { Component } from 'react';

class LifeCycle extends Component {
  state = {
    number:0,
    color:null
  };

  myRef = null;
  constructor(props) {
    super(props)
    console.log("constructor 호출")
  }

  static getDerivedStateFromProps (nextProps, prevState){
    console.log("getDerivedStateFromProps 2번째 호출");
    if(nextProps.color !== prevState.color) {
      return{color: nextProps.color};
    }
    return null;
  }

  componentDidMount() {
    console.log("4번째 호출 : componentDidMount가 완료 되었어요.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2번째 호출 : shouldComponentUpdate 호출.", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("하나뿐 : componentWillUnmount 호출.");
  }

  getSnapshotBeforeUpdate(prevPros, prevState) {
    console.log ("getSnapshotBeforeUpdate 스냅샷 확인", prevPros.color, this.props.color);
    if(prevPros.color !== this.props.color) {

      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevPros, prevState, snapshot) {
    console.log("5번째 호출 : componentDidUpdate 호출.", prevPros, prevState);
    if (snapshot) {
      console.log ("업데이트 되기 전 색상 :", snapshot);
    }
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log ("3번째 호출 render : 마운트 또는 업데이트 호출시");

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