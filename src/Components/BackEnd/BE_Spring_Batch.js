import React from "react";
import "../../Styles/css/Contents.css";
import batch from "../../Styles/images/batch.png";
import batch2 from "../../Styles/images/batch2.jpg";

function BE_Spring_Batch() {
  return (
    <>
      <div className="content">
        <p className="title">Spring Batch🍃</p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={batch}
          alt="batch1"
          style={{ width: "650px", marginBottom: "0" }}
        ></img>
        <p className="subtitle">배치란 ?</p>
        <hr className="underline"></hr>
        <p className="subject">
          사용자와 상호작용 없이 여러개의 작업을 미리 정해진 순서에 따라
          일괄적으로 모아서 중단 없이 처리하는것을 의미한다.
        </p>

        <p className="subtitle">스케줄러란 ?</p>
        <hr className="underline"></hr>
        <p className="subject">
          특정한 시간에 등록한 작업을 자동으로 실행하는것을 의미한다.
        </p>

        <p className="subtitle">
          스프링 Batch, 스프링 Quartz, 스프링 Scheduler
        </p>
        <hr className="underline"></hr>
        <p className="subject">
          ㆍ 스프링 배치는 대용량 일괄 처리의 편의를 위해 설계된 프레임워크{" "}
          <br />
          ㆍ Quartz는 스케줄러의 역할을 할 뿐 Batch와 같이 대용량 데이터 처리에
          대한 기능을 지원하지 않는다. Batch 또한 Quartz의 다양한 스케줄 기능을
          지원하지 않으므로 두개를 조합해서 많이 사용한다. <br />ㆍ 스프링
          스케줄러는 스프링 3.1버전부터 스프링에서 제공하는 스케줄러이다.
          Quartz보다 스케줄러를 디테일하게 사용할 수는없지만 구현이 매우
          간단하다.
        </p>

        <p className="subtitle">스프링 배치</p>
        <hr className="underline"></hr>
        <p className="subject">
          스프링의 특징을 그대로 가지고 있기 때문에 DI, AOP, 추상화등을 사용할
          수 있다. <br />
          로깅 & 추적, 트랜잭션 관리, 작업 처리 통계 및 재시작, 리소스 관리 등
          대용량 레코드 처리에 필수적인 재사용 가능한 기능을 제공하고 최적화 및
          파티셔닝 기술을 통하여 대용량 및 고성능 배치 작업을 가능하게 해준다.{" "}
          <br />
          <strong>사용 예시:</strong> <br />
          ㆍ 대용량 비즈니스 데이터를 처리해야 하는 경우 <br />
          ㆍ 특정한 시점에 스케줄러를 통해 자동화된 작업이 필요한 경우 <br />
        </p>

        <p className="subtitle">스프링 배치 구조</p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={batch2}
          alt="batch2"
          style={{ width: "650px" }}
        ></img>
        <p className="subject">
          일반적으로 읽기, 처리, 쓰기 3단계로 나뉘어 있다. <br />
          <strong>ㆍ Job:</strong> 배치 처리 과정을 하나의 단위로 만들어 표현한
          객체. <br />
          하나의 Job안에 여러개의 Step이 있다. Job 설정 시 작업의 간단한 이름과
          step 인스턴스의 정의 및 순서, 작업 재시작 여부 등을 설정한다. <br />
          <strong>ㆍ Job Launcher:</strong> Job을 실행하는 역할. Job의 재실행
          가능 여부 검증, Job의 실행 방법, 파라미터 유효성 검증 등을 수행한다.{" "}
          <br />
          <strong>ㆍ Job Repository:</strong> 배치와 관련된 수치 데이터와 Job의
          상태를 유지 및 관리한다. 일반적으로 관계형 DB를 사용하고 스프링 배치
          내의 주요 컴포넌트가 공유 된다. 실행된 Step, 현재 상태, 읽은 Item 및
          처리된 Item 수 등이 모두 Job Repository에 저장된다.
          <br />
          <strong>ㆍ step:</strong> 스프링 배치에서 가장 일반적으로 상태를
          보여주는 단위, 각 Step은 Job을 구성하는 독립된 작업의 단위이다. Step은
          Tasklet, Chunk 기반으로 두가지가 있다.
        </p>

        <p className="subtitle">스프링 배치 동작 방식</p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>ㆍ Tasklet:</strong> Step이 중지될 때까지 execute 메서드가
          반복해서 수행하고 수행 시 트랜잭션이 얻어진다. 읽기, 처리, 쓰기를
          하나의 작업으로 처리하는 방식. <br />
          <strong>ㆍ Chunk:</strong> 한번에 하나의 데이터를 읽어 Chunk라는
          덩어리를 만든 뒤, 그 단위로 트랜잭션을 다루는것을 의미한다. Chunk
          단위로 트랜잭션이 이루어지기 때문에 실패할 경우에는 실행한 Chunk
          만큼만 롤백이 되고 이전에 수행했던 트랜잭션 범위까지는 반영 된다.{" "}
          <br />
          <br />
          일반적으로 스프링 배치는 대용량 데이터를 다루는 경우가 많아
          Tasklet보다 상대적으로 트랜잭션 단위가 짧은 Item Reader, Item
          Processor, Item Writer를 이용한 Chunk 지향 프로세싱을 이용한다.
        </p>
      </div>
    </>
  );
}

export default BE_Spring_Batch;
