import React from "react";
import "../../Styles/css/Contents.css";
import transaction1 from "../../Styles/images/transaction1.png";
import transaction2 from "../../Styles/images/transaction2.png";

function BE_Transaction() {
  return (
    <>
      <div className="content">
        <p className="title">Transaction π</p>
        <hr className="underline"></hr>

        <p className="subtitle">νΈλμ­μ</p>
        <hr className="underline"></hr>
        <p className="subject">
          λ°μ΄ν° μ²λ¦¬λ₯Ό νλλ°μ μμ΄μ μ€λ₯λ λ€μν μν©μ λνμ¬ μμ μ±μ
          νλ³΄νκ³  μ±κ³΅ν κ²½μ°μλ§ λ°μμ ν΄μ£Όλκ²μ νΈλμ­μμ΄λΌ νλ€. <br />
          <strong>γ μμμ±: </strong>
          DBμ λͺ¨λ λ°μνκ±°λ νΉμ λ°μνμ§ μκ±°λ, μ¦ λͺ¨λ μ±κ³΅μΌλ‘ μ²λ¦¬νκ±°λ
          μ€ν¨λ‘ μ²λ¦¬ ν΄μΌνλκ²μ μλ―Ένλ€. <br />
          <strong>γ μΌκ΄μ±: </strong>
          νΈλμ­μ μμ μ²λ¦¬μ κ²°κ³Όκ° ν­μ μΌκ΄λμ΄μΌ νλ€. <br />
          <strong>γ λλ¦½μ±: </strong>
          λμ λ°μνλ νΈλμ­μλ€μ΄ μλ‘ μν₯μ λΌμΉμ§ μμμΌνλ€. <br />
          <strong>γ μμμ±: </strong>
          νΈλμ­μμ μ±κ³΅μ μΌλ‘ λ§μΉλ©΄ κ²°κ³Όκ° μκ΅¬μ μΌλ‘ μ μ₯λμ΄μΌ νλ€.
        </p>

        <p className="subtitle">μ€νλ§ νλ‘μ νΈμ νΈλμ­μ μ€μ </p>
        <hr className="underline"></hr>
        <p className="subject">
          μ΄λΈνμ΄μμ μ¬μ©ν μ€μ  λ°©λ²μ μ»¨νμ€νΈ λΆλΆμ νλ¨μ μ½λλ₯Ό μΆκ°νλ©΄
          μ¬μ© κ°λ₯νλ€. <br />
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
          μ΄ν νΈλμ­μμ μ²λ¦¬νκ³  μΆμ λ©μλλ ν΄λμ€, μΈν°νμ΄μ€μ
          @Transactional μ΄λΈνμ΄μμ κ±Έλ©΄ λλ€.
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
