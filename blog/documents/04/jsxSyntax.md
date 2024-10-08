# 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개

리액트프로젝트의 App.js로 들어갑시다

App.js가 여러분의 메인페이지입니다.

여기 이미 채워져있던 쓸데없는 html들은 싹 비우고 시작합시다.

<div> 하나만 남기면 됩니다.

```javascript
import 어쩌구;

function App(){
  return (
    <div className="App">
      //다지움 ㅅㄱ
    </div>
  )
}
```

이제 깔끔한 백지상태에서 시작할 수 있습니다.

코드 수정했으면 파일 저장을 해야 미리보기 화면에서 잘 보입니다.

본격적으로 블로그 상단 nav를 제작해봅시다.

간단한 블로그를 만들어볼 것인데 상단메뉴가 있으면 좋을 것 같으니 만들어봅시다.

리액트 환경이라고 뭔가 다르고 심오하게 코드짠다고 오해하는 분들이 많은데

웹페이지 레이아웃은 그냥 옛 방식 그대로 똑같이 <div> 떡칠해서 짜면 됩니다.

(App.js)

```javascript
function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
    </div>
  );
}
```

(App.css)

```css
.black-nav {
  background: black;
  width: 100%;
  display: flex;
  color: white;
  padding: 20px;
}
```

CSS 스타일은 App.css 파일 열어서 집어넣으면 됩니다.

저장 잘 하면 검은색 상단메뉴가 생성됩니다.

아이잘했어요

JSX 문법 1. html에 class 넣을 땐 className

잘보면 평소에 짜던 html/css와 다른 부분이 있습니다.

스타일을 주기 위한 class명을 넣을 때 class=" " 가 아니라 className=" " 이렇게 쓰는 부분이 좀 다른데

왜냐면 실은 App.js에 짜고 있는건 html이 아니라 JSX라고 부르는 이상한 언어라서 그렇습니다.

원래 리액트환경에서 <div>하나 만들고 싶으면 자바스크립트로

React.createElement('div', null)

이딴 식으로 어렵게 코드짜야합니다.

근데 그러면 유저들 다 도망가기 때문에 JSX라는 언어를 대신 사용합니다.

JSX는 html과 사용방식은 비슷합니다.

근데 JSX는 일종의 자바스크립트라서

자바스크립트에서 사용하는 예약어인 class라는 키워드를 막 사용하시면 안됩니다.

그래서 class=" " 넣고 싶으면 className이라고 써야합니다.

이것이 JSX 다루는 첫째 문법이고 외우고 지나가도록 합시다.

JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호}

자바스크립트 변수같은 곳에 있던 자료를

html 중간에 꽂아서 보여주고 싶을 때가 많습니다.

어떻게 하는지 알아봅시다.

```javascript
function App() {
  let post = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그임</div>
        <div>여기에 저 변수에 있던거 꽂고 싶으면?</div>
      </div>
    </div>
  );
}
```

일단 위에 post라는 변수를 만들어서 잠깐 문자를 저장해놨습니다.

변수가 뭐냐고요?

변수는 길고 복잡한 자료를 잠깐 한 단어에 저장해서 쓸 수 있는 고마운 문법이고 var let const 키워드로 아무데나 만들면 됩니다.

아무튼 저 let post 안에 있던 자료를 <div>안에 꽂아넣고 싶으면 어떻게하죠?

옛날 자바스크립트 문법을 쓴다면 document.getElementById().innerHTML = ?? 이런 식이었겠지만

리액트에서는 더 쉽게 데이터를 꽂아넣을 수 있습니다.

```javascript
function App() {
  let post = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그임</div>
        <div>{post}</div>
      </div>
    </div>
  );
}
```

중괄호안에 데이터바인딩하고 싶은 변수명만 담으시면 됩니다.

그럼 미리보기화면에서 <div>강남 우동 맛집</div> 요게 출력됩니다.

틀딱개발자들은 여기서 매우 편리함을 느낍니다. 여러분도 뭔가 느끼는척 하십시오

```javascript
function App() {
  var data = "red";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <div className={data}>안녕하세요</div>
      </div>
    </div>
  );
}
```

온갖 곳에 {} 중괄호를 열어서 변수들을 집어넣을 수 있습니다.

href, id, className, src 등 여러가지 html 속성들에도 가능합니다.

위처럼 쓰면 <div className="red"> 이렇게 되겠군요.

참고로 변수에 있던걸 html에 꽂아넣는 작업을 있어보이는 말로 데이터바인딩이라고 합니다.

JSX 문법 3. html에 style속성 넣고싶으면

<div style="color : blue"> 이런걸 넣고 싶으면

JSX 상에서는 style={ } 안에 { } 자료형으로 집어넣어야합니다.

```jsx
<div style={{ color: "blue", fontSize: "30px" }}> 글씨 </div>
```

이렇게 넣어야합니다.

- { 속성명 : '속성값' } 이렇게 넣으면 됩니다.

- 근데 font-size 처럼 속성명에 대쉬기호를 쓸 수 없습니다.

대쉬기호 대신 모든 단어를 붙여써야합니다. 붙여쓸 땐 앞글자를 대문자로 치환해야합니다.

css 파일 열기 귀찮을 때 쓰면 됩니다.
