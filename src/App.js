import { useState } from 'react';

import './App.css';


const questionsArr = [
  {
    number: 1,
    contents: "관광통역안내사가 가져야 할 자질과 자세는 무엇인가?"
  },
  {
    number: 2,
    contents: "관광통역안내사를 하고자 하는 동기는 무엇인가?"
  }
];


const App = () => { 
  const [question, setQuestion] = useState('');
  const [number, setNumber] = useState(0);

  const randomPick = () => {
    const randomIdx = Math.floor(Math.random()*questionsArr.length);

    setQuestion(questionsArr[randomIdx]["contents"]);
    setNumber(questionsArr[randomIdx]["number"]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-title">
          <h1>관광통역안내사 면접 시뮬레이터</h1>
        </div>
        <div className="App-header-nav">
          <nav>
            <ul>개발자 Github</ul>
            <ul>개발자 프로젝트 블로그</ul>
            <ul>연락처</ul>
          </nav>
        </div>
      </header>
      <section className="App-contents-section">
        <div>
          <div className="select-part">
            <button className="random-btn" onClick={randomPick}>랜덤</button>
            <select>
              <option value=""></option>
            </select>
          </div>
          <div className="list-part">
            <a className="question-list-href" href="/list">문제 번호-리스트 보러가기</a>
          </div>
        </div>
        <div>
          <h2 className="question-title">{number}. {question}</h2>
          <p className="timer">00:00</p>
        </div>
      </section>
    </div>
  );
}

export default App;
