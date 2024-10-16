Create database Company;
use Company;
--DROP DATABASE Company;
CREATE TABLE employee  (
    FNAME      nvarchar(8),
    MINIT       nvarchar(2),
    LNAME     nvarchar(8), 
    SSN    nvarchar(9) NOT NULL,
    BDATE       DATE,
    ADDRESS    nvarchar(27),
    SEX       nvarchar(1),
    SALARY numeric(7) NOT NULL,
    SUPERSSN    nvarchar(9),
    DNO   numeric(1) NOT NULL,
    PRIMARY KEY (SSN),
    FOREIGN KEY (SUPERSSN) REFERENCES EMPLOYEE(SSN)
    );
INSERT INTO employee VALUES ('JAMES','E','BORG','888665555','10-NOV-27','450 STONE, HOUSTON, TX','M',55000,null,1);
INSERT INTO employee VALUES ('FRANKLIN','T','WONG','333445555','08-DEC-45','638 VOSS,HOUSTON TX','M',40000,'888665555',5);
INSERT INTO employee VALUES ('JENNIFER','S','WALLACE','987654321','20-JUN-31','291 BERRY, BELLAIRE, TX','F',43000,'888665555',4);
INSERT INTO employee VALUES ('JOHN','B','SMITH','123456789','09-JAN-55','731 FONDREN, HOUSTON, TX','M',30000,'333445555',5);
INSERT INTO employee VALUES ('RAMESH','K','NARAYAN','666884444','15-SEP-52','975 FIRE OAK, HUMBLE, TX','M',38000,'333445555',5);
INSERT INTO employee VALUES ('JOYCE','A','ENGLISH','453453453','31-JUL-62','5631 RICE, HOUSTON, TX','F',25000,'333445555',5);
INSERT INTO employee VALUES ('ALICIA','J','ZELAYA','999887777','19-JUL-58','3321 CASTLE, SPRING, TX','F',25000,'987654321',4);
INSERT INTO employee VALUES ('AHMAD','V','JABBAR','987987987','29-MAR-59','980 DALLAS, HOUSTON, TX','M',25000,'987654321',4);

CREATE TABLE department
(DNUMBER      numeric(1),DNAME        nvarchar(15),MGRSSN       nvarchar(9),MGRSTARTDATE DATE, PRIMARY KEY(DNUMBER),UNIQUE(DNAME),FOREIGN KEY(MGRSSN)REFERENCES EMPLOYEE(SSN));

INSERT INTO department VALUES (5,'RESEARCH','333445555','22-MAY-78');
INSERT INTO department VALUES (4,'ADMINISTRATION','987654321','01-JAN-85');
INSERT INTO department VALUES (1,'HEADQUARTERS','888665555','19-JUN-71');
ALTER TABLE EMPLOYEE 
	ADD FOREIGN KEY (DNO) REFERENCES DEPARTMENT (DNUMBER);
CREATE TABLE dept_locations(DNUMBER	numeric(1),DLOCATION	nvarchar(15),
PRIMARY KEY(DNUMBER,DLOCATION),
FOREIGN KEY (DNUMBER) REFERENCES DEPARTMENT(DNUMBER)
);

INSERT INTO dept_locations VALUES (1,'HOUSTON');
INSERT INTO dept_locations VALUES (4,'STAFFORD');
INSERT INTO dept_locations VALUES (5,'BELLAIRE');
INSERT INTO dept_locations VALUES (5,'SUGARLAND');
INSERT INTO dept_locations VALUES (5,'HOUSTON');

create table DEPENDENT(ESSN	nvarchar(9),DEPENDENT_NAME	nvarchar(15),SEX  nvarchar(1),BDATE	date,RELATIONSHIP	nvarchar(8),PRIMARY KEY(ESSN,DEPENDENT_NAME),FOREIGN KEY (ESSN) REFERENCES EMPLOYEE(SSN));
INSERT INTO dependent VALUES ('333445555','ALICE','F','05-APR-76','DAUGHTER');
INSERT INTO dependent VALUES ('333445555','THEODORE','M','25-OCT-73','SON');
INSERT INTO dependent VALUES ('333445555','JOY','F','03-MAY-48','SPOUSE');
INSERT INTO dependent VALUES ('123456789','MICHAEL','M','01-JAN-78','SON');
INSERT INTO dependent VALUES ('123456789','ALICE','F','31-DEC-78','DAUGHTER');
INSERT INTO dependent VALUES ('123456789','ELIZABETH','F','05-MAY-57','SPOUSE');
INSERT INTO dependent VALUES ('987654321','ABNER','M','26-FEB-32','SPOUSE');
    create table PROJECT(PNAME	nvarchar(15),PNUMBER	numeric(2),PLOCATION	nvarchar(15),DNUM	numeric(1),PRIMARY KEY(PNUMBER),UNIQUE(PNAME),FOREIGN KEY(DNUM) REFERENCES DEPARTMENT(DNUMBER));
    INSERT INTO project VALUES ('PRODUCTX',1,'BELLAIRE',5);
    INSERT INTO project VALUES ('PRODUCTY',2,'SUGARLAND',5);
    INSERT INTO project VALUES ('PRODUCTZ',3,'HOUSTON',5);
    INSERT INTO project VALUES ('COMPUTERIZATION',10,'STAFFORD',4);
    INSERT INTO project VALUES ('REORGANIZATION',20,'HOUSTON',1);
    INSERT INTO project VALUES ('NEWBENEFITS',30,'STAFFORD',4);
    create table WORKS_ON(ESSN	nvarchar(9),PNO	numeric(2),HOURS	numeric(3,1),PRIMARY KEY(ESSN,PNO),FOREIGN KEY (ESSN) REFERENCES EMPLOYEE(SSN),FOREIGN KEY (PNO) REFERENCES PROJECT(PNUMBER));
    INSERT INTO works_on VALUES ('123456789',1,32.5);
    INSERT INTO works_on VALUES ('123456789',2,7.5);
    INSERT INTO works_on VALUES ('666884444',3,40.0);
    INSERT INTO works_on VALUES ('453453453',1,20.0);
    INSERT INTO works_on VALUES ('453453453',2,20.0);
    INSERT INTO works_on VALUES ('333445555',2,10.0);
    INSERT INTO works_on VALUES ('333445555',3,10.0);
    INSERT INTO works_on VALUES ('333445555',10,10.0);
    INSERT INTO works_on VALUES ('333445555',20,10.0);
    INSERT INTO works_on VALUES ('999887777',30,30.0);
    INSERT INTO works_on VALUES ('999887777',10,10.0);
    INSERT INTO works_on VALUES ('987987987',10,35.0);
    INSERT INTO works_on VALUES ('987987987',30,5.0);
    INSERT INTO works_on VALUES ('987654321',30,20.0);
    INSERT INTO works_on VALUES ('987654321',20,15.0);
    INSERT INTO works_on VALUES ('888665555',20,null);