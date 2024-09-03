/* eslint-disable*/

import { useState } from "react";
import "./App.css";

function App() {
  let posts = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort((a, b) => (a.toUpperCase() < b.toUpperCase() ? -1 : 1));
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>
      {글제목.map(function (content) {
        return (
          <div className="list">
            <h4>
              {content} <span onClick={() => 따봉변경(따봉 + 1)}>👍</span>{" "}
              {따봉}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
