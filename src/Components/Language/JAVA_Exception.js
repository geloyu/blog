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
        <p className="title">Exception Handling π¦</p>
        <hr className="underline"></hr>
        <p className="subtitle">μμΈμ²λ¦¬λ ?</p>
        <hr className="underline"></hr>
        <p className="subject">
          νλ‘κ·Έλ¨ μ€ν μ€ λ°μνλ μ€λ₯λ₯Ό μμΈλΌ νκ³  νλ‘κ·Έλλ° μΈμ΄μ λ¬Έλ²μ 
          μ€λ₯μ μλ¬λΌ νλ€. μ½λλ₯Ό μ»΄νμΌν λ μ°Ύμ μ μκ³  νλ‘κ·Έλ¨μ
          μ€νμμΌμ ν΄λΉ μν©μ λ§λ κ²½μ°μ λ°μνλ μλ¬(Runtime μλ¬)κ° μκΈ°
          λλ¬Έμ μμΈμ²λ¦¬λ₯Ό νλκ² μ’λ€.
        </p>
        <p className="subtitle">κΈ°λ³Έ μμΈ μ²λ¦¬ λ°©λ²</p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>1. try catch λ¬Έ</strong> <br />
          γ try λΈλ­ μμμ μμΈκ° λ°μνλ©΄ μ½λλ₯Ό μ€λ¨νλ€. <br />
          γ λ°μλ μμΈ μ’λ₯κ° catch λΈλ­ μμ μ§μ λ λ΄μ©κ³Ό μΌμΉνλ©΄ κ·Έ μμ
          μ½λλ₯Ό μ€ννλ€. <br />γ catch λΈλ­μ μ¬λ¬ κ° μ¬μ© κ°λ₯νλ―λ‘ μ²«λ²μ§Έ
          μ μΈν catch λΈλ­λΆν° λ€μ catch μμΌλ‘ μμΈ κ²μ¬λ₯Ό νλ€. μ΄λ μμ
          κ΄κ³μ μμΈ μ€ μμ μμΈ ν΄λμ€κ° ν­μ νμ μμΈ ν΄λμ€λ³΄λ€ μμ
          μμ΄μΌ νλ€. <br />
          ex : catch (Exception e) {} β catch (IOException e) {}
          <br />
          γ catchλ¬Έ μμ e.printStackTrace()λ₯Ό μμ±νλ©΄ μλ¬ λ°μ μ μ΄λ
          λΆλΆμμ μμΈκ° λ°μνλμ§ μλ €μ£Όλ μΆμ λ‘κ·Έλ₯Ό λ³΄μ¬μ€λ€.
          <br />
          γ catch λΈλ­ μμ μ½λκ° λͺ¨λ μ€ν λλ©΄ try-catch λΈλ­ λ€μ μ½λλ₯Ό
          μ€ννλ€. <br />
          <img
            className="contentsImage"
            src={exception1}
            alt="exception1"
          ></img>
          <strong>2. finally λ¬Έ</strong> <br />
          μμΈμ²λ¦¬κ° λ°μ μ¬λΆλ₯Ό λ λ λ¬΄μ‘°κ±΄ μ€ννλλ‘ νλ κ΅¬λ¬Έ. μμ νμΌμ
          μ­μ  λ± λ· μ λ¦¬ μ½λκ° μ¬μ©λλ€.
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
          μ΅μ§λ‘ μλ¬λ₯Ό λ°μμν€κ³ μ ν  λ μ¬μ©νκ±°λ <br />
          νμ¬ λ©μλμ μλ¬λ₯Ό μ²λ¦¬ν ν μμ λ©μλμ μλ¬ μ λ³΄λ₯Ό μ£Όλ μ­ν λ‘
          μ¬μ©
          <img
            className="contentsImage"
            src={exception3}
            alt="exception3"
          ></img>
          <br />
          <strong>2. throws:</strong> <br />
          νμ¬ λ©μλμμ μμ μ νΈμΆν μμ λ©μλλ‘ Exceptionμ λ°μ <br />
          μμΈ μ²λ¦¬λ₯Ό νμ¬ λ©μλμμ νμ§ μκ³  νΈμΆν μμ λ©μλμμ μ²λ¦¬
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
