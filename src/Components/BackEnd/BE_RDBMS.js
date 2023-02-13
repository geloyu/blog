import React from "react";
import "../../Styles/css/Contents.css";
import rdbms1 from "../../Styles/images/rdbms1.png";
import rdbms2 from "../../Styles/images/rdbms2.png";
import rdbms3 from "../../Styles/images/rdbms3.jpg";

function BE_RDBMS() {
  return (
    <>
      <div className="content">
        <p className="title">RDBMS 📰</p>
        <hr className="underline"></hr>

        <p className="subtitle">DBMS (DataBase Management System)</p>
        <hr className="underline"></hr>
        <p className="subject">
          DB를 관리하는 시스템. 사용자와 DB사에서 사용자의 요구에 따라 데이터를
          생성해주고 DB를 관리해주는 소프트웨어. 파일 시스템을 사용해 저장하며
          테이블 간에 아무런 관계가 없다.
        </p>

        <p className="subtitle">RDB (Relational Database)</p>
        <hr className="underline"></hr>
        <p className="subject">
          관계형 데이터 모델에 기초를 둔 데이터베이스. 모든 데이터를 2차원의
          테이블 형태로 표현하는데, 데이터를 속성(Attribute)과 데이터
          값(Attribute Value) 으로 구조화한다.
        </p>
        <img
          className="contentsImage"
          src={rdbms1}
          alt="rdbms1"
          style={{ width: "500px", marginBottom: "0px" }}
        ></img>

        <p className="subtitle">
          RDBMS (Relational Database Management System)
        </p>
        <hr className="underline"></hr>
        <p className="subject">
          관계형 데이터 베이스 관리 시스템으로, 테이블들이 서로 연관되어 있어
          일반 DBMS보다 효율적으로 데이터를 저장 및 관리할 수 있다. 정규화를
          통하여 데이터 중복성을 최소화하고, 트랜잭션 수행이 더 쉽다.
        </p>

        <p className="subtitle">기본키, 외래키</p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={rdbms2}
          alt="rdbms2"
          style={{ width: "500px", marginTop: "0px", marginBottom: "0px" }}
        ></img>
        <p className="subject">
          기본키는 한 테이블의 각 로우를 유일하게 식별해주는 컬럼으로 각 테이블
          마다 존재하며 null 값을 허용하지 않는다. <br />
          외래키는 한 테이블의 필드 중 다른 테이블의 로우를 식별할 수 있는
          키이다.
        </p>

        <p className="subtitle">스키마</p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={rdbms3}
          alt="rdbms3"
          style={{ width: "500px", marginBottom: "0px" }}
        ></img>
        <p className="subject">
          DB의 테이블 구조 및 형식, 관계 등을 형식 언어로 기술한것을 의미하며
          일종의 데이터베이스 설계도이다. <br />
          <strong>ㆍ외부 스키마:</strong> <br />
          사용자 입장에서 정의한 DB의 논리구조이다. 데이터들을 어떠한 형식,
          구조, 화면을 통하여 사용자에게 보여줄 것인가에 대한 명세를 뜻한다.
          하나의 DB에는 여러개의 외부 스키마가 있을 수 있다. <br />
          <strong>ㆍ개념 스키마:</strong> <br />
          DB의 전체적인 논리구조이다. 사용자가 필요로하는 데이터를 종합한 족직
          전체의 DB로 하나만 존재하며 개체간의 관계와 제약조건, DB의 접근 권한,
          보안 및 무결성 규칙에 관한 명세를 뜻한다. <br />
          <strong>ㆍ내부 스키마:</strong> <br />
          물리적 저장 장치의 입장에서 본 DB 구조이다. DB에 저장될 레코드의
          물리적인 구조, 저장 데이터 항목의 표현 방법, 내부 레코드의 물리적 순서
          등을 나타낸다.
        </p>

        <p className="subtitle">SQL</p>
        <hr className="underline"></hr>
        <p className="subject">
          RDBMS에서 데이터 관리하기 위해 사용되는 표준 프로그래밍 언어이다. DB
          스키마 생성 및 수정, 테이블 관리, 데이터 CRUD 등 DB와 관련된 모든
          작업을 위해 사용된다. DB마다 문법의 차이가 조금씩 있다. <br />
          <strong>
            ㆍ데이터 정의 언어(DDL, Data Definition Language)
          </strong>{" "}
          <br />
          테이블, 인덱스 등의 개체를 만들고 관리하는데 사용되는 명령어 (CREATE,
          ALTER, DROP 등) <br />
          <strong>ㆍ데이터 조작 언어(DML, Data Manupulation Language)</strong>
          <br />
          데이터 조작 목적으로 사용되는 명령어 (INSERT, UPDATE, DELETE, SELECT
          등) <br />
          <strong>ㆍ 데이터 제어 언어(DCL, Data Control Language)</strong>{" "}
          <br />
          데이터 핸들링 권한 설정, 데이터 무결성 처리 등을 수행한다. (GRANT,
          BEGIN, COMMIT, ROLLBACK 등)
        </p>
      </div>
    </>
  );
}

export default BE_RDBMS;
