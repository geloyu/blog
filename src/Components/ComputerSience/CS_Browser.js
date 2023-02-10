import React from "react";
import "../../Styles/css/Contents.css";
import browser1 from "../../Styles/images/browser1.png";
import browser2 from "../../Styles/images/browser2.png";
function CS_Browser() {
  return (
    <>
      <div className="content">
        <p className="title">웹 브라우저 🌐</p>
        <hr className="underline"></hr>

        <p className="subtitle">브라우저란 ?</p>
        <hr className="underline"></hr>
        <p className="subject">
          웹 브라우저는 동기적으로 HTML, CSS, Javascript 언어를 해석해서 <br />
          내용을 보여주는 응용 소프트웨어이다.
        </p>

        <p className="subtitle">브라우저 기본 구조</p>
        <hr className="underline"></hr>

        <img className="contentsImage" src={browser1} alt="browser1"></img>
        <p className="subject">
          <strong>ㆍ 사용자 인터페이스: </strong>
          주소 표시줄, 이전 & 다음 버튼, 즐겨찾기 등 데이터를 표기하는 페이지
          화면 이외의 다른 부분 <br />
          <strong>ㆍ 브라우저 엔진: </strong>
          인터페이스와 렌더링 엔진 사이에서 동작을 제어 <br />
          <strong>ㆍ 렌더링 엔진: </strong>
          HTML, CSS를 파싱하여 화면에 표시 <br />
          &nbsp; &nbsp; 렌더링 엔진 동작 방식: <br />
          &nbsp; &nbsp; 1. DOM 트리 구축, CSS를 파싱한 CSSOM 트리 구축 <br />
          &nbsp; &nbsp; 2. 렌더 트리 구축 <br />
          &nbsp; &nbsp; 3. 렌더 트리 배치 <br />
          &nbsp; &nbsp; 4. 렌더 트리 그리기 <br />
          <strong>ㆍ 통신: </strong>
          HTTP 요청과 같은 네트워크 호출에 사용 <br />
          <strong>ㆍ JS엔진: </strong>
          Javascript 코드를 해석하고 실행 <br />
          <strong>ㆍ UI 백엔드: </strong>
          select / input 등 기본적인 위젯을 그리는 역할 <br />
          <strong>ㆍ 자료 저장소: </strong>
          Cookie, Local storage 등 로컬 자료를 저장하는 웹 DB
        </p>

        <p className="subtitle">브라우저 동작 순서 예시</p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={browser2}
          alt="browser2"
          style={{ width: "150%" }}
        ></img>
        <p className="subject">
          1. 렌더링 엔진을 통하여 최초 요청에 대한 응답. <br />
          2. HTML이 있는 DOM 트리와 CSS를 파싱한 CSSOM 트리로 구성된 응답을
          화면에 표시. <br />
          3. 자바스크립트 엔진을 통하여 자바스크립트 파일을 로드하고 파힝 후
          실행.
        </p>
      </div>
    </>
  );
}

export default CS_Browser;
