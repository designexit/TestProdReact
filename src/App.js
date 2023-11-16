import './App.css';
//자식
import Main from './component/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApiList from './MK-ReactTest/component/ApiList';


function App() {
  return (
    // 페이지 이동을 위한 설정2
    // 전체 요소를 <BrowserRouter></BrowserRouter>로 감싸기
    // 구성요소는 Routes -> Route로 구성
    <BrowserRouter>
      <Routes>
        {/* index로 사용할 페이지 설정 */}
        <Route index element={<Main />} />
        {/* path : 해당 페이지, element : 이동할 컴포넌트 */}
        <Route path="ApiBusanFestival" element={<ApiList/>} />
      </Routes>
      
      <div className="App">
        
      </div>
    </BrowserRouter>
  );
}

export default App;
