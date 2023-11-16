import logo from './logo.svg';
import './App.css';
//자식
import Join from './component/Join';
import Main from './component/Main';
import { Button, Space, DatePicker, version } from "antd";
//페이지 이동을 위한 설정
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // 페이지 이동을 위한 설정2
    // 전체 요소를 <BrowserRouter></BrowserRouter>로 감싸기
    // 구성요소는 Routes -> Route로 구성
    <BrowserRouter>
      <Routes>
        {/* index로 사용할 페이지 설정 */}
        <Route index element = {<Main/>} />
        {/* element : 이동할 컴포넌트 */}
        <Route path='join' element = {<Join/>} />
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
