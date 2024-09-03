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
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>

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
            <h4
              onClick={() => {
                setTitle(i);
                setModal(true);
              }}
            >
              {content}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>
              2월 17일 발행
              <button
                onClick={() => {
                  let tmp글제목 = [...글제목];
                  tmp글제목.splice(i, 1);
                  글제목변경(tmp글제목);
                  let tmp따봉 = [...따봉];
                  tmp따봉.splice(i, 1);
                  따봉변경(tmp따봉);
                }}
              >
                삭제
              </button>
            </p>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      />
      <button
        onClick={() => {
          let tmp글제목 = [...글제목];
          tmp글제목.push(입력값);
          글제목변경(tmp글제목);
          let tmp따봉 = [...따봉];
          tmp따봉.push(0);
          따봉변경(tmp따봉);
        }}
      >
        생성
      </button>
      {modal == true ? (
        <Modal title={title} 글제목={글제목} 글제목변경={글제목변경} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
