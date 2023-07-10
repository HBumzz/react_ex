import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 맛집 추천','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style ={ {color: 'red' , fontSize :'16px'}}>블로그임</h4>
      </div>
      <div className="list">
        <button>가나다순 정렬</button>

        <button onClick = { ()=> {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>글수정</button>
        <h4>{ 글제목[0] } <span onClick={() => { 따봉변경(따봉+1) } }> 👍 </span> { 따봉[0] } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      {/* !쓰면 반대로 */}
      <div className="list">
        <h4 onClick= {() => {setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      {
          글제목.map(function(a, i){
            return (
              <div className="list">
                <h4>{ 글제목[i] } <span onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                 } }> 👍 </span> { 따봉[i] } 
                  </h4>

                <p>2월 17일 발행</p>
              </div>
            )
          })
        
      }
      
      
      {
        modal == true ? <Modal 글제목변경 = { 글제목변경 }color = {'yellow'} 글제목 = {글제목}></Modal> : null
      }
      
    </div>
  );
}



// Components
function Modal(props) {
  return (
    <div className="modal" style = {{background : props.color}}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick = {() => {
        let copy = [...props.글제목변경];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        }}>글수정</button>
    </div>
  )
}

// Components
// const Modal = () => {

// }


export default App;
