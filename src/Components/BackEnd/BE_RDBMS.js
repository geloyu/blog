import React from "react";
import "../../Styles/css/Contents.css";
import rdbms1 from "../../Styles/images/rdbms1.png";
import rdbms2 from "../../Styles/images/rdbms2.png";
import rdbms3 from "../../Styles/images/rdbms3.jpg";

function BE_RDBMS() {
  return (
    <>
      <div className="content">
        <p className="title">RDBMS ๐ฐ</p>
        <hr className="underline"></hr>

        <p className="subtitle">DBMS (DataBase Management System)</p>
        <hr className="underline"></hr>
        <p className="subject">
          DB๋ฅผ ๊ด๋ฆฌํ๋ ์์คํ. ์ฌ์ฉ์์ DB์ฌ์์ ์ฌ์ฉ์์ ์๊ตฌ์ ๋ฐ๋ผ ๋ฐ์ดํฐ๋ฅผ
          ์์ฑํด์ฃผ๊ณ  DB๋ฅผ ๊ด๋ฆฌํด์ฃผ๋ ์ํํธ์จ์ด. ํ์ผ ์์คํ์ ์ฌ์ฉํด ์ ์ฅํ๋ฉฐ
          ํ์ด๋ธ ๊ฐ์ ์๋ฌด๋ฐ ๊ด๊ณ๊ฐ ์๋ค.
        </p>

        <p className="subtitle">RDB (Relational Database)</p>
        <hr className="underline"></hr>
        <p className="subject">
          ๊ด๊ณํ ๋ฐ์ดํฐ ๋ชจ๋ธ์ ๊ธฐ์ด๋ฅผ ๋ ๋ฐ์ดํฐ๋ฒ ์ด์ค. ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ 2์ฐจ์์
          ํ์ด๋ธ ํํ๋ก ํํํ๋๋ฐ, ๋ฐ์ดํฐ๋ฅผ ์์ฑ(Attribute)๊ณผ ๋ฐ์ดํฐ
          ๊ฐ(Attribute Value) ์ผ๋ก ๊ตฌ์กฐํํ๋ค.
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
          ๊ด๊ณํ ๋ฐ์ดํฐ ๋ฒ ์ด์ค ๊ด๋ฆฌ ์์คํ์ผ๋ก, ํ์ด๋ธ๋ค์ด ์๋ก ์ฐ๊ด๋์ด ์์ด
          ์ผ๋ฐ DBMS๋ณด๋ค ํจ์จ์ ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ ์ฅ ๋ฐ ๊ด๋ฆฌํ  ์ ์๋ค. ์ ๊ทํ๋ฅผ
          ํตํ์ฌ ๋ฐ์ดํฐ ์ค๋ณต์ฑ์ ์ต์ํํ๊ณ , ํธ๋์ญ์ ์ํ์ด ๋ ์ฝ๋ค.
        </p>

        <p className="subtitle">๊ธฐ๋ณธํค, ์ธ๋ํค</p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={rdbms2}
          alt="rdbms2"
          style={{ width: "500px", marginTop: "0px", marginBottom: "0px" }}
        ></img>
        <p className="subject">
          ๊ธฐ๋ณธํค๋ ํ ํ์ด๋ธ์ ๊ฐ ๋ก์ฐ๋ฅผ ์ ์ผํ๊ฒ ์๋ณํด์ฃผ๋ ์ปฌ๋ผ์ผ๋ก ๊ฐ ํ์ด๋ธ
          ๋ง๋ค ์กด์ฌํ๋ฉฐ null ๊ฐ์ ํ์ฉํ์ง ์๋๋ค. <br />
          ์ธ๋ํค๋ ํ ํ์ด๋ธ์ ํ๋ ์ค ๋ค๋ฅธ ํ์ด๋ธ์ ๋ก์ฐ๋ฅผ ์๋ณํ  ์ ์๋
          ํค์ด๋ค.
        </p>

        <p className="subtitle">์คํค๋ง</p>
        <hr className="underline"></hr>
        <img
          className="contentsImage"
          src={rdbms3}
          alt="rdbms3"
          style={{ width: "500px", marginBottom: "0px" }}
        ></img>
        <p className="subject">
          DB์ ํ์ด๋ธ ๊ตฌ์กฐ ๋ฐ ํ์, ๊ด๊ณ ๋ฑ์ ํ์ ์ธ์ด๋ก ๊ธฐ์ ํ๊ฒ์ ์๋ฏธํ๋ฉฐ
          ์ผ์ข์ ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ค๊ณ๋์ด๋ค. <br />
          <strong>ใ์ธ๋ถ ์คํค๋ง:</strong> <br />
          ์ฌ์ฉ์ ์์ฅ์์ ์ ์ํ DB์ ๋ผ๋ฆฌ๊ตฌ์กฐ์ด๋ค. ๋ฐ์ดํฐ๋ค์ ์ด๋ ํ ํ์,
          ๊ตฌ์กฐ, ํ๋ฉด์ ํตํ์ฌ ์ฌ์ฉ์์๊ฒ ๋ณด์ฌ์ค ๊ฒ์ธ๊ฐ์ ๋ํ ๋ช์ธ๋ฅผ ๋ปํ๋ค.
          ํ๋์ DB์๋ ์ฌ๋ฌ๊ฐ์ ์ธ๋ถ ์คํค๋ง๊ฐ ์์ ์ ์๋ค. <br />
          <strong>ใ๊ฐ๋ ์คํค๋ง:</strong> <br />
          DB์ ์ ์ฒด์ ์ธ ๋ผ๋ฆฌ๊ตฌ์กฐ์ด๋ค. ์ฌ์ฉ์๊ฐ ํ์๋กํ๋ ๋ฐ์ดํฐ๋ฅผ ์ขํฉํ ์กฑ์ง
          ์ ์ฒด์ DB๋ก ํ๋๋ง ์กด์ฌํ๋ฉฐ ๊ฐ์ฒด๊ฐ์ ๊ด๊ณ์ ์ ์ฝ์กฐ๊ฑด, DB์ ์ ๊ทผ ๊ถํ,
          ๋ณด์ ๋ฐ ๋ฌด๊ฒฐ์ฑ ๊ท์น์ ๊ดํ ๋ช์ธ๋ฅผ ๋ปํ๋ค. <br />
          <strong>ใ๋ด๋ถ ์คํค๋ง:</strong> <br />
          ๋ฌผ๋ฆฌ์  ์ ์ฅ ์ฅ์น์ ์์ฅ์์ ๋ณธ DB ๊ตฌ์กฐ์ด๋ค. DB์ ์ ์ฅ๋  ๋ ์ฝ๋์
          ๋ฌผ๋ฆฌ์ ์ธ ๊ตฌ์กฐ, ์ ์ฅ ๋ฐ์ดํฐ ํญ๋ชฉ์ ํํ ๋ฐฉ๋ฒ, ๋ด๋ถ ๋ ์ฝ๋์ ๋ฌผ๋ฆฌ์  ์์
          ๋ฑ์ ๋ํ๋ธ๋ค.
        </p>

        <p className="subtitle">SQL</p>
        <hr className="underline"></hr>
        <p className="subject">
          RDBMS์์ ๋ฐ์ดํฐ ๊ด๋ฆฌํ๊ธฐ ์ํด ์ฌ์ฉ๋๋ ํ์ค ํ๋ก๊ทธ๋๋ฐ ์ธ์ด์ด๋ค. DB
          ์คํค๋ง ์์ฑ ๋ฐ ์์ , ํ์ด๋ธ ๊ด๋ฆฌ, ๋ฐ์ดํฐ CRUD ๋ฑ DB์ ๊ด๋ จ๋ ๋ชจ๋ 
          ์์์ ์ํด ์ฌ์ฉ๋๋ค. DB๋ง๋ค ๋ฌธ๋ฒ์ ์ฐจ์ด๊ฐ ์กฐ๊ธ์ฉ ์๋ค. <br />
          <strong>
            ใ๋ฐ์ดํฐ ์ ์ ์ธ์ด(DDL, Data Definition Language)
          </strong>{" "}
          <br />
          ํ์ด๋ธ, ์ธ๋ฑ์ค ๋ฑ์ ๊ฐ์ฒด๋ฅผ ๋ง๋ค๊ณ  ๊ด๋ฆฌํ๋๋ฐ ์ฌ์ฉ๋๋ ๋ช๋ น์ด (CREATE,
          ALTER, DROP ๋ฑ) <br />
          <strong>ใ๋ฐ์ดํฐ ์กฐ์ ์ธ์ด(DML, Data Manupulation Language)</strong>
          <br />
          ๋ฐ์ดํฐ ์กฐ์ ๋ชฉ์ ์ผ๋ก ์ฌ์ฉ๋๋ ๋ช๋ น์ด (INSERT, UPDATE, DELETE, SELECT
          ๋ฑ) <br />
          <strong>ใ ๋ฐ์ดํฐ ์ ์ด ์ธ์ด(DCL, Data Control Language)</strong>{" "}
          <br />
          ๋ฐ์ดํฐ ํธ๋ค๋ง ๊ถํ ์ค์ , ๋ฐ์ดํฐ ๋ฌด๊ฒฐ์ฑ ์ฒ๋ฆฌ ๋ฑ์ ์ํํ๋ค. (GRANT,
          BEGIN, COMMIT, ROLLBACK ๋ฑ)
        </p>
      </div>
    </>
  );
}

export default BE_RDBMS;
