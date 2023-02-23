import React from "react";
import "../../Styles/css/Contents.css";
import exception1 from "../../Styles/images/exception1.png";
import exception2 from "../../Styles/images/exception2.png";
import exception3 from "../../Styles/images/exception3.png";
import exception4 from "../../Styles/images/exception4.png";

function BE_Transaction() {
  return (
    <>
      <div className="content">
        <p className="title">Exception Handling 🦖</p>
        <hr className="underline"></hr>
        <p className="subtitle">예외처리란 ?</p>
        <hr className="underline"></hr>
        <p className="subject">
          프로그램 실행 중 발생하는 오류를 예외라 하고 프로그래밍 언어의 문법적
          오류을 에러라 한다. 코드를 컴파일할때 찾을 수 없고 프로그램을
          실행시켜서 해당 상황에 맞는 경우에 발생하는 에러(Runtime 에러)가 있기
          때문에 예외처리를 하는게 좋다.
        </p>
        <p className="subtitle">기본 예외 처리 방법</p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>1. try catch 문</strong> <br />
          ㆍ try 블럭 안에서 예외가 발생하면 코드를 중단한다. <br />
          ㆍ 발생된 예외 종류가 catch 블럭 안에 지정된 내용과 일치하면 그 안의
          코드를 실행한다. <br />ㆍ catch 블럭은 여러 개 사용 가능하므로 첫번째
          선언한 catch 블럭부터 다음 catch 순으로 예외 검사를 한다. 이때 상속
          관계의 예외 중 상위 예외 클래스가 항상 하위 예외 클래스보다 위에
          있어야 한다. <br />
          ex : catch (Exception e) {} → catch (IOException e) {}
          <br />
          ㆍ catch문 안에 e.printStackTrace()를 작성하면 에러 발생 시 어느
          부분에서 예외가 발생했는지 알려주는 추적로그를 보여준다.
          <br />
          ㆍ catch 블럭 안의 코드가 모두 실행 되면 try-catch 블럭 다음 코드를
          실행한다. <br />
          <img
            className="contentsImage"
            src={exception1}
            alt="exception1"
          ></img>
          <strong>2. finally 문</strong> <br />
          예외처리가 발생 여부를 떠나 무조건 실행하도록 하는 구문. 임시 파일의
          삭제 등 뒷 정리 코드가 사용된다.
          <br />
          <img
            className="contentsImage"
            src={exception2}
            alt="exception2"
          ></img>
        </p>

        <p className="subtitle">throw, throws</p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>1. throw:</strong> <br />
          억지로 에러를 발생시키고자 할 때 사용하거나 <br />
          현재 메서드의 에러를 처리한 후 상위 메서드에 에러 정보를 주는 역할로
          사용
          <img
            className="contentsImage"
            src={exception3}
            alt="exception3"
          ></img>
          <br />
          <strong>2. throws:</strong> <br />
          현재 메서드에서 자신을 호출한 상위 메서드로 Exception을 발생 <br />
          예외 처리를 현재 메서드에서 하지 않고 호출한 상위 메서드에서 처리
          <img
            className="contentsImage"
            src={exception4}
            alt="exception4"
          ></img>
        </p>
      </div>
    </>
  );
}

export default BE_Transaction;
