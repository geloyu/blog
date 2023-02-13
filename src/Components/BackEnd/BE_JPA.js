import React from "react";
import "../../Styles/css/Contents.css";
import jpa from "../../Styles/images/jpa.png";

function BE_JPA() {
  return (
    <>
      <div className="content">
        <p className="title">JPA 📰</p>
        <hr className="underline"></hr>

        <p className="subtitle">JPA (Java Persistence API) </p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={jpa}
          alt="jpa"
          style={{ width: "650px" }}
        ></img>
        <p className="subject">
          JPA는 자바에서 ORM 기술 표준으로 사용되는 인터페이스의 모음으로,
          구현된 클래스와 매핑을 해주기 위해 사용되는 프레임워크이다.
          어플리케이션과 JDBC 사이에서 동작한다. JPA는 복잡하고 미세한 쿼리
          작업이 필요한 경우 보다는 실시간 처리용 쿼리에 최적화 되어 있다.
        </p>

        <p className="subtitle">ORM (Object-Relational Mapping) </p>
        <hr className="underline"></hr>
        <p className="subject">
          애플리케이션 Class와 관계형 DB의 테이블을 매핑한다는 것이며,
          기술적으로는 애플리케이션의 객체를 테이블에 자동으로 영속화
          해주는것이다. SQL 문이 아닌 메서드를 통하여 DB조작이 가능하여 비즈니스
          로직에 더 집중할 수 있다. 쿼리를 하나하나 작성할 필요가 없어 코드량이
          줄어드는 효과가 있다. <br />
          <strong>생산성: </strong> <br />
          쿼리를 직접 생성하는 것이 아니고 만들어진 객체로 DB를 다루기 때문에
          객체 중심으로 개발 진행이 가능하다. <br />
          <strong>유지보수: </strong> <br />
          기존에 쿼리 수정 시 데이터를 담는 DTO도 수정했어야 됐는데, JPA를
          사용하면 단순히 엔티티 클래스 정보만 바꾸면 돼서 관리가 편하다. <br />
          <strong>다양한 DB와의 연결: </strong> <br />
          객체 중심으로 동작하기 때문에 Oracle, MySQL과 같이 서로 다른 DB를
          사용하려고 할때 문법을 바꿔야하는 수고를 줄일 수 있다.
        </p>

        <p className="subtitle">MyBatis</p>
        <hr className="underline"></hr>
        <p className="subject">
          SQL 실행 결과를 Java Bean 또는 Map 객체에 매핑 해주는 솔루션으로
          관리하는것을 의미. SQL 소스 코드가 아닌 xml로 분리하여 SQL문과
          프로그래밍 코드를 분리해서 구현한다. 데이터소스 기능과 트랜잭션 처리
          기능을 제공한다. 쿼리를 직접 짜야하므로 테이블 변경 시 쿼리도 같이
          수정이 필요하다. MyBatis는 복잡하고 미세하게 쿼리 작업이 필요한 경우에
          효율적이다.
        </p>
      </div>
    </>
  );
}

export default BE_JPA;
