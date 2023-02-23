import React from "react";
import "../../Styles/css/Contents.css";
import rest from "../../Styles/images/rest.png";
function CS_REST() {
  return (
    <>
      <div className="content">
        <p className="title"> REST API 📻</p>
        <hr className="underline"></hr>

        <img
          className="contentsImage"
          src={rest}
          alt="rest"
          style={{ width: "700px" }}
        ></img>

        <p className="subtitle">REST (Representional State Transfer)</p>
        <hr className="underline"></hr>
        <p className="subject">
          네트워크상에서 클라이언트와 서버사이의 통신 방식 중 하나. 자원의
          표현에 의한 상태전달, 자원을 이름으로 구분하여 해당 자원의 상태를 주고
          받는 것을 의미한다. <br />
          HTTP URI를 통하여 자원을 명시하고 HTTP Method(POST, GET, PUT,
          DELETE)를 이용하여 해당 자원에 대한 CRUD를 실행한다.
        </p>

        <p className="subtitle">API (Application Programming Interface)</p>
        <hr className="underline"></hr>
        <p className="subject">
          요청과 응답을 사용하여 두 어플리케이션이 서로 통신하는 방법을 정의.{" "}
          <br />
          서비스 요청에따라 데이터나 서비스 기능을 제공하는 역할.
        </p>

        <p className="subtitle">REST API</p>
        <hr className="underline"></hr>
        <p className="subject">
          REST를 기반으로 서비스 API를 구현한것을 의미. 클라이언트와 서버가
          HTTP를 사용하여 데이터를 교환한다. REST 기반으로 시스템을 분리하여
          확장성과 재사용성을 높이고 유지보수 및 운용을 편리하게 할 수 있다.
          서버가 요청간에 클라이언트 데이터를 저장하지 않는 무상태성을 가지고
          있다.
        </p>

        <p className="subtitle">REST API 규칙 </p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>
            1. URI는 동사가 아닌 명사를 사용 <br />
          </strong>
          &nbsp; &nbsp; (X) /users/1/getProfile <br />
          &nbsp; &nbsp; (O) /users/profile/1 <br />
          <strong>
            2. URI는 복수 명사 사용 <br />
          </strong>
          &nbsp; &nbsp; (X) /users/item/1 <br />
          &nbsp; &nbsp; (O) /users/items/1 <br />
          <strong>
            3. 슬래시 구분자는 계층 관계를 나타내는데 사용 <br />
          </strong>
          &nbsp; &nbsp; (X) /apartments/houses <br />
          &nbsp; &nbsp; (O) /houses/aprtments <br />
          <strong>
            4. URI 마지막 문자로 슬래시 금지 <br />
          </strong>
          &nbsp; &nbsp; (X) /houses/aprtments/ <br />
          &nbsp; &nbsp; (O) /houses/apartments <br />
          <strong>
            5. 하이픈을 사용하여 URI 가독성을 높이는데 사용, 언더바는 금지{" "}
            <br />
          </strong>
          <strong>
            6. URI 경로에는 소문자를 사용하고 파일 확장자는 포함하지 않는다{" "}
            <br />
          </strong>
          <strong>
            7. Collection과 Document 이해 중요 <br />
          </strong>
          &nbsp; &nbsp; Collection은 Document의 집합 <br />
          &nbsp; &nbsp; Document는 객체 <br />
          &nbsp; &nbsp; ex: sports는 컬렉션, soccer는 다큐먼트
          <br />
          &nbsp; &nbsp; /sports/soccer/players/1 <br />
          <strong>
            8. HTTP 응답 상태에 따른 응답 처리 중요 <br />
          </strong>
          &nbsp; &nbsp;<strong>응답 상태 코드:</strong> <br />
          &nbsp; &nbsp;1XX: 전송 프로토콜 수준의 정보 교환 <br />
          &nbsp; &nbsp;2XX: 클라이언트 요청이 성공적으로 수행 <br />
          &nbsp; &nbsp;3XX: 요청을 완료하기 위해 클라이언트는 추가적인 행동을
          취해야한다 <br />
          &nbsp; &nbsp;4XX: 클라이언트의 잘못된 요청 <br />
          &nbsp; &nbsp;5XX: 서버쪽 오류 <br />
        </p>

        <p className="subtitle">RESTFul</p>
        <hr className="underline"></hr>
        <p className="subject">
          REST를 기반으로 구현한 웹 서비스를 의미. REST API를 제공하는 웹
          서비스를 RESTFul 하다고 할 수 있다. 성능 향상이 목적이 아니라 일관적인
          컨벤션을 통하여 API의 이해도 및 호환성을 높이는것이 목적이다. <br />{" "}
          <br />
          <strong>RESTFul하지 못한 경우 예시: </strong>
          <br />
          CRUD를 모두 POST로만 처리하는 API는 RESTFul하지 못하다. <br />
          route에 resource, id외의 다른 정보가 들어가는 경우 RESTFul하지 못하다.
          (/students/updateName)
        </p>
      </div>
    </>
  );
}

export default CS_REST;
