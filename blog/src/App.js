import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [글제목, b] = useState(['남자 코트 추천','강남 맛집 추천','파이썬독학']);

  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style ={ {color: 'red' , fontSize :'16px'}}>블로그임</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
