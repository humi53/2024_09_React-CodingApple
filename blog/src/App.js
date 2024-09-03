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
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
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
      {글제목.map(function (content, i) {
        return (
          <div className="list">
            <h4>
              {content}{" "}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
