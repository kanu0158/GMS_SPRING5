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
SELECT * FROM member;
SELECT * FROM BOARD;
DESC BOARD;

SHOW VARIABLES LIKE 'c%';