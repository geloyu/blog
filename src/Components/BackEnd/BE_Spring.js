import React from "react";
import "../../Styles/css/Contents.css";

function BE_Spring() {
  return (
    <>
      <div className="content">
        <p className="title">Spring 🍃</p>
        <hr className="underline"></hr>

        <p className="subtitle">스프링이란 ?</p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>Java 언어를 기반으로 한 프레임워크.</strong> <br />
          <strong> 프레임워크 :</strong> <br />
          프로그램을 하기 위한 기본 틀, 어플리케이션을 개발하기 위해 필요한
          기본적인 클래스와 라이브러리가 포함되어 있는 환경. <br />
          <strong> 라이브러리 :</strong> <br />
          자주 사용되는 로직을 재사용하기 편리하도록 class나 function으로 정리한
          코드의 집합. <br />
          언제든지 필요한 곳에서 호출해서 사용할 수 있다.
        </p>

        <p className="subtitle">스프링 특징</p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>1. IoC (Inversion of Control, 제어 반전)</strong> <br />
          개발자가 new 연산자, 인터페이스 호출, 데이터 클래스 호출 등 객체를
          생성하고 소멸 시키는데 이런 객체 생명주기 관리를 개발자가 직접하는게
          아닌 스프링 컨테이너가 대신 해준다. <br />
          <strong>2. DI (Dependency Injection, 의존성 주입)</strong> <br />
          구성요소 간의 의존관계가 외부의 설정파일을 통하여 정의 되는 방식. 코드
          재사용을 높여서 소스코드를 다양한 곳에서 사용하는것을 의미하는데 이는
          모듈간의 결합도를 낮출 수 있다. <br />
          <strong>예시:</strong> <br />
          - 주체 A가 객체 B를 직접 생성하는 경우 의존성이 높아지게 된다. 이는
          변경사항이 있을 경우 서로에게 큰 영향을 미치게 된다. <br />
          - 객체 B를 외부에서 직접 생성하여 관리 후 주체 A에게 주입하는 경우에는
          A와 B의 의존성이 낮아진다. <br />
          <strong>요약:</strong> <br />
          개발자가 아닌 스프링이 A가 사용할 객체를 생성하여 의존 관계를 맺어주는
          것을 IoC라고 하며, 그 과정에서 외부 객체 B를 A의 생성자를 통하여
          주입해주는 것을 DI라고 한다. <br />
          <strong>
            3. AOP (Aspect Object Programming, 관점 지향 프로그래밍)
          </strong>{" "}
          <br />
          로깅, 트랜잭션, 보안 등 여러 모듈에서 공통적으로 사용하는 기능을
          분리하여 관리할 수 있다. 서로 다른 관점을 조합하는 기능을 스프링에서
          제공해주기 때문에 유지보수가 수월하고 각각의 관점에 최적화 된
          프로그래밍이 가능하다. 또한 공통적으로 사용되는 기능이나 사항은 코드가
          중복될 수 있기 때문에 관련된 기능들을 별도의 객체로 분리해서
          프로그래밍 하는것이 좋다. <br />
          <strong>4. POJO 방식(Plain Old Java Object)</strong> <br />
          일반적인 Java 코드를 이용하여 프로그래밍이 가능. 기존의
          프레임워크에서는 미리 설계되어 있는 인터페이스나 클래스를 상속받아서
          무거운 객체를 만들어야 했지만 스프링을 통하여 일반적인 Java 코드
          만으로 객체를 구성할 수 있게 된다. <br />
          <strong>
            5. PSA(Portable Service Abstraction, 일관된 서비스 추상화)
          </strong>{" "}
          <br />
          스프링을 사용하면 동일한 사용방법을 유지한채로 데이터 베이스를 바꿀 수
          있다.
          <br />
          예시: (Mysql에서 Maria DB로 변경) <br />
          이는 스프링이 데이터베이스 서비스를 추상화한 인터페이스를 제공해 주기
          때문에 가능하다. Java를 사용하여 데이터베이스에 접근하는 방법을 규정한
          인터페이스를 제공해주는것을 JDBC(Java Database Connectivity) 라고
          한다. JDBC처럼 특정 기술과 관련된 서비스를 일관된 방식으로 사용할 수
          있게끔 하는 것을 PSA라고 한다.
        </p>

        <p className="subtitle">스프링 부트</p>
        <hr className="underline"></hr>
        <p className="subject">
          기존 스프링 설정을 간편하게 처리 해줘서 비즈니스 로직에 더 집중할 수
          있게끔 도와주는 프레임워크이다. 자체 웹서버를 내장하고 있기 때문에
          빠르고 간편히 배포를 진행할 수 있다. 또한 jar파일로 프로젝트를 빌드할
          수 있어서 클라우드 서비스 및 도커와 같은 환경에 빠르게 배포할 수 있다.
        </p>
      </div>
    </>
  );
}

export default BE_Spring;
