import React from "react";
import "../../Styles/css/Contents.css";
import transaction1 from "../../Styles/images/transaction1.png";
import transaction2 from "../../Styles/images/transaction2.png";

function BE_Transaction() {
  return (
    <>
      <div className="content">
        <p className="title">Transaction 🍃</p>
        <hr className="underline"></hr>

        <p className="subtitle">트랜잭션</p>
        <hr className="underline"></hr>
        <p className="subject">
          데이터 처리를 하는데에 있어서 오류나 다양한 상황에 대하여 안정성을
          확보하고 성공한 경우에만 반영을 해주는것을 트랜잭션이라 한다. <br />
          <strong>ㆍ 원자성: </strong>
          DB에 모두 반영하거나 혹은 반영하지 않거나, 즉 모두 성공으로 처리하거나
          실패로 처리 해야하는것을 의미한다. <br />
          <strong>ㆍ 일관성: </strong>
          트랜잭션 작업 처리의 결과가 항상 일관되어야 한다. <br />
          <strong>ㆍ 독립성: </strong>
          동시 발생하는 트랜잭션들이 서로 영향을 끼치지 않아야한다. <br />
          <strong>ㆍ 영속성: </strong>
          트랜잭션을 성공적으로 마치면 결과가 영구적으로 저장되어야 한다.
        </p>

        <p className="subtitle">스프링 프로젝트에 트랜잭션 설정</p>
        <hr className="underline"></hr>
        <p className="subject">
          어노테이션을 사용한 설정 방법은 컨텍스트 부분에 하단의 코드를 추가하면
          사용 가능하다. <br />
          <strong>
            &lt; tx:annotation-driven transaction-manager="txManager"/&gt;
          </strong>
          <img
            className="contentsImage"
            src={transaction1}
            alt="transaction1"
            style={{ width: "800px" }}
          ></img>
          <br />
          이후 트랜잭션을 처리하고 싶은 메서드나 클래스, 인터페이스에
          @Transactional 어노테이션을 걸면 된다.
          <img
            className="contentsImage"
            src={transaction2}
            alt="transaction2"
            style={{ width: "800px" }}
          ></img>
        </p>
      </div>
    </>
  );
}

export default BE_Transaction;
