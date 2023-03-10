import React from "react";
import "../../Styles/css/Contents.css";
import rest from "../../Styles/images/rest.png";
function CS_REST() {
  return (
    <>
      <div className="content">
        <p className="title"> REST API π»</p>
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
          λ€νΈμν¬μμμ ν΄λΌμ΄μΈνΈμ μλ²μ¬μ΄μ ν΅μ  λ°©μ μ€ νλ. μμμ
          ννμ μν μνμ λ¬, μμμ μ΄λ¦μΌλ‘ κ΅¬λΆνμ¬ ν΄λΉ μμμ μνλ₯Ό μ£Όκ³ 
          λ°λ κ²μ μλ―Ένλ€. <br />
          HTTP URIλ₯Ό ν΅νμ¬ μμμ λͺμνκ³  HTTP Method(POST, GET, PUT,
          DELETE)λ₯Ό μ΄μ©νμ¬ ν΄λΉ μμμ λν CRUDλ₯Ό μ€ννλ€.
        </p>

        <p className="subtitle">API (Application Programming Interface)</p>
        <hr className="underline"></hr>
        <p className="subject">
          μμ²­κ³Ό μλ΅μ μ¬μ©νμ¬ λ μ΄νλ¦¬μΌμ΄μμ΄ μλ‘ ν΅μ νλ λ°©λ²μ μ μ.{" "}
          <br />
          μλΉμ€ μμ²­μλ°λΌ λ°μ΄ν°λ μλΉμ€ κΈ°λ₯μ μ κ³΅νλ μ­ν .
        </p>

        <p className="subtitle">REST API</p>
        <hr className="underline"></hr>
        <p className="subject">
          RESTλ₯Ό κΈ°λ°μΌλ‘ μλΉμ€ APIλ₯Ό κ΅¬ννκ²μ μλ―Έ. ν΄λΌμ΄μΈνΈμ μλ²κ°
          HTTPλ₯Ό μ¬μ©νμ¬ λ°μ΄ν°λ₯Ό κ΅ννλ€. REST κΈ°λ°μΌλ‘ μμ€νμ λΆλ¦¬νμ¬
          νμ₯μ±κ³Ό μ¬μ¬μ©μ±μ λμ΄κ³  μ μ§λ³΄μ λ° μ΄μ©μ νΈλ¦¬νκ² ν  μ μλ€.
          μλ²κ° μμ²­κ°μ ν΄λΌμ΄μΈνΈ λ°μ΄ν°λ₯Ό μ μ₯νμ§ μλ λ¬΄μνμ±μ κ°μ§κ³ 
          μλ€.
        </p>

        <p className="subtitle">REST API κ·μΉ </p>
        <hr className="underline"></hr>
        <p className="subject">
          <strong>
            1. URIλ λμ¬κ° μλ λͺμ¬λ₯Ό μ¬μ© <br />
          </strong>
          &nbsp; &nbsp; (X) /users/1/getProfile <br />
          &nbsp; &nbsp; (O) /users/profile/1 <br />
          <strong>
            2. URIλ λ³΅μ λͺμ¬ μ¬μ© <br />
          </strong>
          &nbsp; &nbsp; (X) /users/item/1 <br />
          &nbsp; &nbsp; (O) /users/items/1 <br />
          <strong>
            3. μ¬λμ κ΅¬λΆμλ κ³μΈ΅ κ΄κ³λ₯Ό λνλ΄λλ° μ¬μ© <br />
          </strong>
          &nbsp; &nbsp; (X) /apartments/houses <br />
          &nbsp; &nbsp; (O) /houses/aprtments <br />
          <strong>
            4. URI λ§μ§λ§ λ¬Έμλ‘ μ¬λμ κΈμ§ <br />
          </strong>
          &nbsp; &nbsp; (X) /houses/aprtments/ <br />
          &nbsp; &nbsp; (O) /houses/apartments <br />
          <strong>
            5. νμ΄νμ μ¬μ©νμ¬ URI κ°λμ±μ λμ΄λλ° μ¬μ©, μΈλλ°λ κΈμ§{" "}
            <br />
          </strong>
          <strong>
            6. URI κ²½λ‘μλ μλ¬Έμλ₯Ό μ¬μ©νκ³  νμΌ νμ₯μλ ν¬ν¨νμ§ μλλ€{" "}
            <br />
          </strong>
          <strong>
            7. Collectionκ³Ό Document μ΄ν΄ μ€μ <br />
          </strong>
          &nbsp; &nbsp; Collectionμ Documentμ μ§ν© <br />
          &nbsp; &nbsp; Documentλ κ°μ²΄ <br />
          &nbsp; &nbsp; ex: sportsλ μ»¬λ μ, soccerλ λ€νλ¨ΌνΈ
          <br />
          &nbsp; &nbsp; /sports/soccer/players/1 <br />
          <strong>
            8. HTTP μλ΅ μνμ λ°λ₯Έ μλ΅ μ²λ¦¬ μ€μ <br />
          </strong>
          &nbsp; &nbsp;<strong>μλ΅ μν μ½λ:</strong> <br />
          &nbsp; &nbsp;1XX: μ μ‘ νλ‘ν μ½ μμ€μ μ λ³΄ κ΅ν <br />
          &nbsp; &nbsp;2XX: ν΄λΌμ΄μΈνΈ μμ²­μ΄ μ±κ³΅μ μΌλ‘ μν <br />
          &nbsp; &nbsp;3XX: μμ²­μ μλ£νκΈ° μν΄ ν΄λΌμ΄μΈνΈλ μΆκ°μ μΈ νλμ
          μ·¨ν΄μΌνλ€ <br />
          &nbsp; &nbsp;4XX: ν΄λΌμ΄μΈνΈμ μλͺ»λ μμ²­ <br />
          &nbsp; &nbsp;5XX: μλ²μͺ½ μ€λ₯ <br />
        </p>

        <p className="subtitle">RESTFul</p>
        <hr className="underline"></hr>
        <p className="subject">
          RESTλ₯Ό κΈ°λ°μΌλ‘ κ΅¬νν μΉ μλΉμ€λ₯Ό μλ―Έ. REST APIλ₯Ό μ κ³΅νλ μΉ
          μλΉμ€λ₯Ό RESTFul νλ€κ³  ν  μ μλ€. μ±λ₯ ν₯μμ΄ λͺ©μ μ΄ μλλΌ μΌκ΄μ μΈ
          μ»¨λ²€μμ ν΅νμ¬ APIμ μ΄ν΄λ λ° νΈνμ±μ λμ΄λκ²μ΄ λͺ©μ μ΄λ€. <br />{" "}
          <br />
          <strong>RESTFulνμ§ λͺ»ν κ²½μ° μμ: </strong>
          <br />
          CRUDλ₯Ό λͺ¨λ POSTλ‘λ§ μ²λ¦¬νλ APIλ RESTFulνμ§ λͺ»νλ€. <br />
          routeμ resource, idμΈμ λ€λ₯Έ μ λ³΄κ° λ€μ΄κ°λ κ²½μ° RESTFulνμ§ λͺ»νλ€.
          (/students/updateName)
        </p>
      </div>
    </>
  );
}

export default CS_REST;
