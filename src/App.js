import { useState } from 'react';

import './App.css';


const questionsArr = [
  {
    number: 1,
    contents: "다크 투어리즘을 설명하세요."
  },
  {
    number: 2,
    contents: "전주한옥마을에 대해 설명하세요."
  },
  {
    number: 3,
    contents: "우리나의 최초의 국립공원과 가장 최근에 지정된 국립공원에 대해 설명하세요."
  },
  {
    number: 4,
    contents: "우리나의 문화엔 어떤게 있나요."
  },
  {
    number: 5,
    contents: "영상 관광이란 무엇인가요?"
  },
  {
    number: 6,
    contents: "가이드의 장점과 단점이 뭘까요?"
  },
  {
    number: 7,
    contents: "외국인이 한국인을 방문해야 하는 이유에 대해 설명하세요."
  },
  {
    number: 8,
    contents: "사물놀이에 대해 설명하시오."
  },
  {
    number: 9,
    contents: "에코 투어리즘에 대해 설명하세요."
  },
  {
    number: 10,
    contents: "조선 왕릉에 대해 설명하세요."
  },
  {
    number: 11,
    contents: "관통사의 의미는 무엇이며, 왜 지원하게 되었나요?"
  },
  {
    number: 12,
    contents: "관광이 지역 및 국가에 미치는 영향은 무엇인가요?"
  },
  {
    number: 13,
    contents: "외국인이 안 좋아하는 한국의 음식문화는 무엇인가요?"
  },
  {
    number: 14,
    contents: "경주 역사지구를 5개로 나누어서 설명하세요."
  },
  {
    number: 15,
    contents: "김치에 대한 설명 및 특이점에 대해 설명하시오."
  },
  {
    number: 16,
    contents: "추석에 대해 설명하시오."
  },
  {
    number: 17,
    contents: "관광객이 점심 메뉴가 싫다고 하면 어떻게 하실 건가요?"
  },
  {
    number: 18,
    contents: "한류를 체험할 수 있는 관광지 2곳과 그 이유에 대해 설명하세요."
  },
  {
    number: 19,
    contents: "관광통역안내사를 취득하고 싶은 이유는 무엇이고 추후 계획은 무엇인가요?"
  },
  {
    number: 20,
    contents: "Voluntary tourism의 예시와 그에 대한 생각을 말하시오."
  },
  {
    number: 21,
    contents: "향후 여행환경도 변화될것 같은데, 가이드로서 어떻게하면 좋을까요?"
  },
  {
    number: 22,
    contents: "단오에 대해서 설명하세요."
  },
  {
    number: 23,
    contents: "관광객이 여권을 분실하면 어떻게 대처할 건가요?"
  },
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
