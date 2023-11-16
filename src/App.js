import logo from './logo.svg';
import './App.css';
//자식
import Join from './component/Join';
import Main from './component/Main';
import MyCount from './component/MyCount';
import RefPracticeScrollTest from './ch5-component/RefPracticeScrollTest';
import DataListKeyAddDelTest from './ch6-component/DataListKeyAddDelTest';
import LifeCycle from './ch7-classlifecycle/LifeCycle';
import InfoTestUseState from './ch8-hookstest/InfoTestUseState';
import InfoTestUseEffect from './ch8-hookstest/InfoTestUseEffect';
import CountUseReducerTest from './ch8-hookstest/CountUseReducerTest';
import AverageUseMemoTest from './ch8-hookstest/AverageUseMemoTest';
import AverageUseCallback from './ch8-hookstest/AverageUseCallback'
import { Button, Space, DatePicker, version } from 'antd';
//페이지 이동을 위한 설정
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoTestUseReducer from './ch8-hookstest/InfoTestUseReducer';
import AverageUseRefTest from './ch8-hookstest/AverageUseRefTest';
import AverageUseParamsTest from './ch8-hookstest/AverageUseParamsTest';
import TestSass from './ch9-component/TestSass';
import StyledComponentsTest from './ch9-component/StyledComponentsTest';
import TodoMain from './ch10-TodoTest/TodoMain';
import ImmerTest from './ch12-immerTest/ImmerTest';
import TestZone from './ch12-immerTest/ImmerTest';
import ApiTest from './ch13-API_PublicDataTest/ApiTest';
import ApiTestKoreaNews from './ch13-API_PublicDataTest/ApiTestKoreaNews';
import MainNews from './ch13-API_PublicDataTest/component/MainNews';
import NewsPage from './ch13-API_PublicDataTest/page/NewsPage';
import TestColorBox from './ch14-contextAPITest/TestColorBox';
import TestColorMain from './ch14-contextAPITest/TestColorMain'

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
        <Route path="Join" element={<Join />} />
        <Route path="MyCount" element={<MyCount />} />
        <Route path="scrollRefTest" element={<RefPracticeScrollTest />} />
        <Route path="listKeyAddDel" element={<DataListKeyAddDelTest />} />
        <Route path="ClassLifeCycleTest" element={<LifeCycle />} />
        <Route path="hooksUseStateTest" element={<InfoTestUseState />} />
        <Route path="hooksEffectTest" element={<InfoTestUseEffect />} />
        <Route path="hooksReducerTest" element={<CountUseReducerTest />} />
        <Route path="hooksReducerTest2" element={<InfoTestUseReducer />} />
        <Route path="UseMemo" element={<AverageUseMemoTest />} />
        <Route path="UseCallback" element={<AverageUseCallback />} />
        <Route path="UseRefTest" element={<AverageUseRefTest/>} />
        <Route path="UseParamsTest/:id" element={<AverageUseParamsTest/>} />
        <Route path="SassTest" element={<TestSass/>} />
        <Route path="styledComponentsTest" element={<StyledComponentsTest/>} />
        <Route path="todoMain" element={<TodoMain/>} />
        <Route path="immerTest" element={<ImmerTest/>} />
        <Route path="testZone" element={<TestZone/>} />
        <Route path="ApiTest" element={<ApiTest/>} />
        <Route path="ApiTest2" element={<ApiTestKoreaNews/>} />
        <Route path="ApiTest3" element={<MainNews/>} />
        <Route path="newsPageTest/:category" element={<NewsPage />} />
        <Route path="contextAPITest" element={<TestColorBox/>} />
        <Route path="contextAPITest2" element={<TestColorMain/>} />
      </Routes>
      
      <div className="App">
        
      </div>
    </BrowserRouter>
  );
}

export default App;
