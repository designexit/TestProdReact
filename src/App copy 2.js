import logo from './logo.svg';
import './App.css';
//자식
import Join from './component/Join';
import Main from './component/Main';
import MyCount from './component/MyCount';
import RefPracticeScrollTest from './ch5-component/RefPracticeScrollTest';
import DataListKeyAddDelTest from './ch6-component/DataListKeyAddDelTest';
import LifeCycle from './ch7-classlifecycle/LifeCycle';
import { Button, Space, DatePicker, version } from "antd";
//페이지 이동을 위한 설정
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  //색상을 랜덤하게 변경시켜 이전 상태와 props, snapshot확인
  function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16)
  }

  //부모 app -> 자식 컴포넌트로 props에 컬러 전달
  //초기값 세팅
  const [color, setColor] 
  state = {
    color : "#000000",
  };
  //자식에게 색을 전달하기 위한 이벤트 함수 수행
  handleClick = () => {
    this.setState({

    })
  }

  return (
    
    // 페이지 이동을 위한 설정2
    // 전체 요소를 <BrowserRouter></BrowserRouter>로 감싸기
    // 구성요소는 Routes -> Route로 구성
    <BrowserRouter>
      <Routes>
        {/* index로 사용할 페이지 설정 */}
        <Route index element = {<Main/>} />
        {/* path : 해당 페이지, element : 이동할 컴포넌트 */}
        <Route path='Join' element = {<Join/>} />
        <Route path='MyCount' element = {<MyCount/>} />
        <Route path='scrollRefTest' element = {<RefPracticeScrollTest/>} />
        <Route path='listKeyAddDel' element = {<DataListKeyAddDelTest/>} />
        <Route path='ClassLifeCycleTest' element = {<LifeCycle/>} />
      </Routes>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* antd 튜토리얼 샘플 가져오기 테스트 */}
        <div style={{ padding: "0 24px" }}>
          <h1>antd version: {version}</h1>
          <Space>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
          </Space>
        </div>
        {/* antd 튜토리얼 샘플 가져오기 테스트 */}
        <Join/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
