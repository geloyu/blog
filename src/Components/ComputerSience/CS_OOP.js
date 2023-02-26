import React from "react";
import "../../Styles/css/Contents.css";

function CS_OOP() {
  return (
    <>
      <div className="content">
        <p className="title">객체지향 🪢</p>
        <hr className="underline"></hr>

        <p className="subtitle">절차 지향 프로그래밍</p>
        <hr className="underline"></hr>
        <p className="subject">
          프로그래밍을 기능 중심으로 보며, "무엇을 어떤 절차로 할 것인가"가
          핵심으로 어떤 기능을 어떤 순서로 처리하는가에 초점을 맞춘다. 소형
          프로그래밍의 경우 작은 기능을 수반하기 때문에 절차 지향이 적합하다.
        </p>

        <p className="subtitle">객체 지향 프로그래밍</p>
        <hr className="underline"></hr>
        <p className="subject">
          프로그래밍을 객체 중심으로 보며, "누가 어떤일을 할 것인가"가 핵심으로
          객체를 도출하고 각각의 역할을 정의해 나가는 것에 초점을 맞춘다. 많은
          기능을 수반하는 프로그래밍의 경우 절차지향 보다는 객체지향이 적합하다.
        </p>

        <p className="subtitle">객체 지향 프로그래밍 특징</p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>1. 캡슐화</strong> <br />
          객체가 독립적으로 역할을 수행할 수 있도록 데이터와 기능을 하나로 묶어
          관리하는것을 의미한다. 구현된 부분을 외부에 드러나지 않도록 하여
          정보를 은닉할 수 있다. <br />
          <strong>2. 추상화</strong> <br />
          객체들의 공통적인 기능이나 속성을 도출하는것을 의미한다. 예를들어
          고양이, 강아지 등 종류를 각각의 객체라 하고 이를 공통으로 묶는 동물을
          추상화라고 한다. <br />
          <strong>3. 상속성</strong> <br />
          하나의 클래스가 가진 함수나 데이터를 다른 클래스가 그대로 물려받아
          사용되는것을 의미한다. <br />
          <strong>4. 다형성</strong> <br />
          다른 방법으로 동작하는 함수를 동일한 이름으로 호출하는것을 의미한다.{" "}
          <br />
          <strong>오버라이딩:</strong> 부모 클래스의 메서드와 같은 이름과
          매개변수를 사용하지만 내부 소스를 재정의 하는것을 의미. <br />
          <strong>오버로딩:</strong> 같은 이름의 함수를 여러개 정의한 후에
          매개변수를 다르게하여 같은 이름을 경우에 따라 호출해서 사용하는것을
          의미. <br />
        </p>

        <p className="subtitle">객체 지향 프로그래밍 장점</p>
        <hr className="underline"></hr>
        <p className="subject">
          은닉화로 인하여 보안성이 높고, 코드의 재사용으로 소프트웨어의 생산성이
          향상된다.
        </p>

        <p className="subtitle">객체 지향 프로그래밍 단점</p>
        <hr className="underline"></hr>
        <p className="subject">
          캡슐화나 격리구조 때문에 실행 속도가 절차지향 프로그래밍보다 느리다.
          <br />
          객체들로 구성되어 있기 때문에 추가적인 메모리와 연산에 대한 비용이
          든다.
        </p>
      </div>
    </>
  );
}

export default CS_OOP;
