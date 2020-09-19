import React from 'react';
import logo from './logo.svg';
//import './App.css';

//demo1
import User from './demo1/user';

//demo2 #1 解决跨域问题
import Crossomain from './demo2-cross-domain/crossDomain';

//demo3 #1 封装http请求
import Request from './demo3-封装网络请求，方便使用/request'

function App() {
  return (
    <div className="App">
      hello
      <User/>

      {/*//demo2 #2 解决跨域问题*/}
      <Crossomain/>

      {/*demo3 #2 封装http请求*/}
      <Request/>
    </div>
  );
}

export default App;
