<!-- 블록지정하고 ALT + X 실행 단축키 -->
create table BOARD(
    bno INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NULL,
    writer VARCHAR(50) NOT NULL,
    regdate TIMESTAMP NOT NULL DEFAULT now(),
    viewcnt INT DEFAULT 0,
    PRIMARY KEY (bno)
);

INSERT INTO BOARD
( title, content, writer, regdate, viewcnt)
VALUES
('라이언킹','정글의 왕 사자무리 아기사자','Abhaig','2017-08-02',0);
INSERT INTO BOARD
( title, content, writer, regdate, viewcnt)
VALUES
('어린왕자','불시착한 비행조종사와 외계소년','생떼','2017-08-07',0);
SELECT * FROM member;
SELECT * FROM BOARD;
DESC BOARD;
SHOW TABLES;
SHOW VARIABLES LIKE 'c%';

CREATE TABLE POINT(
	POINT_SEQ INT PRIMARY KEY,
	ALL_POINT INT DEFAULT 10000,
	MBR_POINT INT,
	USERID VARCHAR(20)
);

ALTER TABLE Board ADD(replycnt INT);

INSERT INTO POINT
( POINT_SEQ, MBR_POINT, USERID)
VALUES
(1,0,'T1');